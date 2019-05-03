<template>
  <li
    :class="{ 'active': added }"
    class="item"
  >
    <div>{{ rocket.rocket_name }}</div>
    <div>{{ rocket.mass.kg }}</div>
    <!-- <button v-if="!added" @click.prevent="addToBucket(rocket.rocket_id)">Add</button> -->
    <BaseButton
      v-if="!added"
      @click.prevent="addToBucket(rocket.rocket_id)"
      :label="rocket.rocket_id === 'falcon9' ? 'Add Falcon9' : 'Add rocket'"
      :class="{ 'red': rocket.rocket_id === 'falcon9' }"
      @created-basebutton="onLol"
    >
      <template v-if="rocket.rocket_id === 'falcon9'">
        <template slot="jessica">
          <div>
            <span>Jessica</span>
            <span>Hello</span>
          </div>
        </template>

        <template slot="jack">
          <button>Jack</button>
        </template>
      </template>
    </BaseButton>
    <button v-else @click.prevent="removeFromBucket(rocket.rocket_id)">Remove</button>
  </li>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    BaseButton
  },

  props: {
    rocket: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapGetters('billing', [
      'bucket'
    ]),

    added () {
      return this.bucket.includes(this.rocket.rocket_id)
    }
  },

  methods: {
    ...mapActions('billing', [
      'addToBucket',
      'removeFromBucket'
    ]),

    onLol () {
      console.log('onLol')
    }
  }
}
</script>

<style lang="stylus" scoped>
.item
  list-style none
  background #eeeeee
  border 1px solid #ccc
  border-radius 3px
  padding 10px
  max-width 300px
  &:not(:last-child)
    margin-bottom 20px
  &.active
    background-color green
</style>
