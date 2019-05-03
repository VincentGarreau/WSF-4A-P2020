import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import Vue from 'vue'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)

export function createApolloClient () {
  const httpLink = createHttpLink({
    uri: process.env.NODE_ENV === 'production'
      ? 'https://spacex-graphql-api.vingarreau.now.sh'
      : 'http://localhost:4000'
  })

  const cache = new InMemoryCache()

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache
  })

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient
  })

  return { apolloProvider }
}
