<template lang="pug">
#app
  md-toolbar
    h2.md-title(style="flex: 1")
      img.icon(src="/static/icon.png")
      | Cigriculture
  router-view
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="stylus" scoped>
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
.md-title
  font-weight: bolder
.icon
  width: 32px
  margin-right: 20px
</style>
