<template>
  <div
    @click.capture="$emit('click', $event); $emit('lol')"
  >
    <button class="base-button">{{ label }}</button>
    <slot name="jessica"/>
    <slot name="jack"/>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },

  created () {
    this.$emit('created-basebutton')
  }
}
</script>

<style lang="stylus" scoped>
.base-button
  appearance none
  background-color grey
  color white
  &.red
    background-color red
</style>
