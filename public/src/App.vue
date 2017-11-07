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
    overflow: auto;
    z-index: -1;
    /* position: fixed; */

    background-attachment: fixed;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding-bottom: 80%;
    background-size: cover;
    font-family: 'Slabo 27px', serif;
  }
</style>