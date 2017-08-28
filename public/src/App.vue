<template>
  <div id="app">
      <router-view></router-view>
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