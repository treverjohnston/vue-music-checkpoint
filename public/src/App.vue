<template>
  <div id="app" class="app">
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
body {
    background-image: url("./assets/images/background.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Slabo 27px', serif;
  }
</style>