<template>
    <div class="tunes">
        <div class="container-fluid">
            <div class="row">
                <div v-for="tune in tunes">
                    <div class="col-xs-12">
                        <div class="playlist">
                            <div class="row">
                                <div class="col-xs-8">
                                    <h5>{{tune.title}}</h5>
                                    <p>{{tune.artist}}</p>
                                </div>
                                <div class="col-xs-1">
                                    <button class="btn btn-default vote" @click="promoteTrack(tune._id)">+</button>
                                </div>
                                <div class="col-xs-1">
                                    <button class="btn btn-default vote" @click="demoteTrack(tune._id)">-</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-10">
                                    <audio controls class="audio">
                                        <source :src="tune.preview" type="audio/mp3 ">
                                    </audio>
                                </div>
                                <div class="col-xs-1">
                                    <button class="btn btn-default" @click="removeTrack(tune._id)">X</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tunes',
        data() {
            return {
            }
        },
        mounted() {
            this.$store.dispatch("getMyTunes")
        },
        methods: {
            removeTrack(trackId) {
                this.$store.dispatch("removeTrack", trackId)
            },
            promoteTrack(trackId) {
                this.$store.dispatch("promoteTrack", trackId)
            },
            demoteTrack(trackId) {
                this.$store.dispatch("demoteTrack", trackId)
            }
            
        },
        computed: {
            tunes() {
                return this.$store.state.myTunes
            }
        },

    }

</script>

<style scoped>
    .playlist {
        color: white;
        padding: 1rem 3rem 1rem 1rem;
        margin: 1rem;
        border-radius: 5px;
        background-image: url("../assets/images/piano.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .audio {
        max-width: 9rem;
    }

    .btn {
        background-color: transparent;
        font-size: 1rem;
        color: white;
    }

    .vote{
        padding: 0 1rem 0 1rem;
        font-size: 2rem;
    }
</style>