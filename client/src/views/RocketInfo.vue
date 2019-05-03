<template>
  <div v-if="rocket">
    <img class="image" :src="rocket.flickr_images[0]" alt="">
    <span v-if="bucket.includes(rocket.rocket_id)">Déjà ajouté au panier</span>
    <button v-else @click="addToBucket(rocket.rocket_id)">Ajouter au panier</button>
  </div>
  <div v-else>
    <span>Loading...</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import gql from 'graphql-tag'

export default {
  data () {
    return {}
  },

  apollo: {
    rocket: {
      query: gql`
        query GetRocket($id: String) {
          rocket(rocketId: $id) {
            rocket_id
            rocket_name
            mass {
              kg
            }
            flickr_images
          }
      }`,
      variables () {
        return {
          id: this.$route.params.id
        }
      }
    }
  },

  computed: {
    ...mapGetters('billing', [
      'bucket'
    ])
  },

  methods: {
    ...mapActions('billing', [
      'addToBucket'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.image
  display block
  width 400px
  margin 0 auto
</style>
