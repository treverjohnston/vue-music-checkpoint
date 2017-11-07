<template>
  <div class="home">
    <search></search>
    <div v-if="!loggedIn">
      <results></results>
    </div>
    <div v-else>
      <notresults></notresults>
    </div>
  </div>
</template>

<script>
  import Results from './Results'
  import Notresults from './Notresults'
  import Tunes from './Tunes'
  import Search from './Search'
  export default {
    name: 'home',
    data() {
      return {
      }
    },
    components: {
      Results,
      Tunes,
      Notresults,
      Search
    },
    computed: {
      loggedIn() {
        return this.$store.state.log
      }
    }
  }

</script>


<style scoped>
  body {
    background-image: url("../assets/images/background.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Slabo 27px', serif;
  }

  .list {
    background-color: rgba(255, 255, 255, .2);
    border-radius: 5px;
  }

  .search {
    background-color: rgba(255, 255, 255, .2);
    border-radius: 5px;
    padding: 2rem 0 2rem 0;
  }
</style>