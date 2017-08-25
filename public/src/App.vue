<template>
  <div id="app">
    <search></search>
    <!-- <tunes></tunes> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Search from './components/Search'
// import Tunes from './components/Tunes'

export default {
  name: 'app',
  components: {
    Search
  }
}
</script>

<style>
</style>
