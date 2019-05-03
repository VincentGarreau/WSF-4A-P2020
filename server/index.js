const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const SpaceXAPI = require('./SpaceXAPI')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    SpaceXAPI: new SpaceXAPI()
  })
})

server.listen().then(({ url }) => {
  console.log(`Server listen on ${url}`)
})