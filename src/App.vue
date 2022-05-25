<template>
  <div id="app">
    2312321
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$bus.$emit('collapse', false
    )
  },
}
</script>

<style>
#app {

  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
