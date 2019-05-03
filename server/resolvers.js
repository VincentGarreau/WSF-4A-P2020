const resolvers = {
  Query: {
    rockets: (_, args, { dataSources }) => {
      return dataSources.SpaceXAPI.getRockets()
    },

    rocket: (_, { rocketId }, { dataSources }) => {
      return dataSources.SpaceXAPI.getRocket({ rocketId })
    }
  }
}

module.exports = resolvers