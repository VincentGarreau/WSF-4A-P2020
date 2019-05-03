const { RESTDataSource } = require('apollo-datasource-rest')

class SpaceXAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://api.spacexdata.com/v3/' 
  }

  async getRockets () {
    return await this.get('rockets')
  }

  async getRocket ({ rocketId }) {
    return await this.get(`rockets/${rocketId}`)
  }
}

module.exports = SpaceXAPI