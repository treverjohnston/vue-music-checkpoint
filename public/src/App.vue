<template>
  <div id="app">
    <div v-if="loggedIn">
      <search></search>
      <router-view></router-view>
    </div>
    <div v-else>
      <search></search>
      <results></results>
    </div>
  </div>
</template>

<script>
  import Search from './components/Search'
  import Results from './components/Results'
  // import Tunes from './components/Tunes'

  export default {
    name: 'app',
    components: {
      Search,
      Results
    },
    computed: {
      loggedIn() {
        return this.$store.state.log
      }
    }
  }

</script>

<style>

</style>