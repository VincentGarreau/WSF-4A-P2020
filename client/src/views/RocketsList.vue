<template>
  <ul class="list">
    <router-link
      v-for="(rocket, index) in rockets"
      :key="index"
      :to="{ name: 'rocket-info', params: { id: rocket.rocket_id } }"
    >
      <RocketsListItem
        :rocket="rocket"
      />
    </router-link>
  </ul>
</template>

<script>
// import axios from 'axios'
import RocketsListItem from '@/components/RocketsListItem.vue'
import { mapGetters, mapActions } from 'vuex'

import gql from 'graphql-tag'

export default {
  components: {
    RocketsListItem
  },

  data () {
    return {
    }
  },

  apollo: {
    rockets: gql`
      query getRockets {
        rockets {
          rocket_id
          rocket_name
          mass {
            kg
          }
        }
      }
    `
  },

  computed: {
    ...mapGetters('billing', [
      'bucket'
    ])
  },

  // async created () {
  //   const { data } = await axios.get('rockets', { params: { limit: 10 } })
  //   this.rockets = data
  // },

  methods: {
    ...mapActions('billing', [
      'addToBucket'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.list
  max-width 300px
  margin 20px auto 0 auto
</style>
