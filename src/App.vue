<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="main"></router-view>
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
  height: 100%;
}
</style>
