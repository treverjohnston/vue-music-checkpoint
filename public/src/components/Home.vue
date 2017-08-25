<template>
  <div class="home">
    <div class="container-fluid">
      <div v-if="loggedIn">
        <div class="row">
          <div class="col-xs-9">
            <div class="search">
              <results></results>
            </div>
          </div>
          <div class="col-xs-3">
            <div class="list">
              <tunes></tunes>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <notresults></notresults>
      </div>
    </div>
  </div>
</template>

<script>
  import Results from './Results'
  import Notresults from './Notresults'
  import Tunes from './Tunes'
  export default {
    name: 'home',
    data() {
      return {
        loggedIn: true
      }
    },
    components: {
      Results,
      Tunes,
      Notresults
    }
  }

</script>


<style scoped>
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