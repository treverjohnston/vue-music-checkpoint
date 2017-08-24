<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12">
                <form class="form-inline text-center form" @submit.prevent="getMusic()">
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="artist" placeholder="Search For Music" />
                        <button type="submit" class="btn btn-default" id="get-music-button">Get Music</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
            }
        },
        methods: {
            getMusic() {
                this.$store.dispatch("getMusicByArtist", this.artist)
            }
        },

        computed: {
            songs() {
                return this.$store.state.results
            }
        }
    }

</script>
<style scoped>
    .form{
        padding-bottom: 5rem;
    }

</style>