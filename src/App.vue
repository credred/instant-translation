<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="banner"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  min-height: 100%;
}
</style>
