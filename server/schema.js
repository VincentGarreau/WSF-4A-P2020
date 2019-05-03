const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    rockets: [Rocket]!
    rocket(rocketId: String): Rocket
  }

  type Rocket {
    rocket_name: String
    rocket_id: String
    mass: Mass,
    flickr_images: [String]!
  }

  type Mass {
    kg: Int!
  }
`

module.exports = typeDefs