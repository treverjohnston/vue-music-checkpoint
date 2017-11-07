<template>
    <div class="results">
        <div class="container-fluid">
            <div class="row">
                <div v-for="song in songs">
                    <div class="col-xs-12 col-lg-6 col-xl-4">
                        <div class="song">
                            <div class="row">
                                <div class=" col-xs-6">
                                    <img :src="song.albumArt" class="img-responsive image fade" alt="album art ">
                                </div>
                                <div class="col-xs-6">
                                    <div class="title text-center fade">
                                        <h4>{{song.title}}</h4>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="row"> -->
                            <div class="col-xs-12">
                                <div class="replacement">
                                    <div class="change">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <h3>{{song.artist}}</h3>
                                                <div v-model="album">
                                                    <h4>{{song.album}}</h4>
                                                </div>
                                                <h5>Album Cost: {{song.price}}</h5>
                                            </div>
                                            <div class="col-xs-1">
                                                <button class="btn btn-default plus" @click="addToMyTunes(song), addToMyPlaylist(song)">+</button>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <audio controls class="audio">
                                                    <source :src="song.preview" type="audio/mp3 ">
                                                </audio>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- </div> -->
                                </div>
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
        name: 'results',
        data() {
            return {
                artist: '',
                album: ''
            }
        },
        computed: {
            songs() {
                return this.$store.state.results
            },
            myTunes() {
                return this.$store.state.myTunes
            }
        },
        methods: {
            addToMyTunes(track) {
                track.position = this.myTunes.length+1
                this.$store.dispatch('addToMyTunes', track)
            },
            addToMyPlaylist(track) {
                // this.$store.dispatch('addToMyPlaylist', track)
            }
        }
    }

</script>


<style>
    body {
        background-image: url("../assets/images/background.jpg");
        overflow: auto;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-size: cover;
        font-family: 'Slabo 27px', serif;
    }

    .title {
        padding: 1rem 0 1rem 0;
        margin: 4rem 1rem 1rem 1rem;
        background-color: white;
        border-radius: 5px;
    }

    .song {
        margin: 0rem 2rem 5rem 2rem;
        background-image: url("../assets/images/songTwo.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 4px;
        padding: 5rem 1rem 2rem 1rem;
    }

    .fade {
        opacity: 1;
        /* display: block;  */
        /* width: 30rem;
          height: 30rem;  */
        transition: .5s ease;
        backface-visibility: hidden;
    }

    .image {

        min-height: 15rem;
        min-width: 15rem;
        margin: 0 auto;
        border-radius: 5px;
    }

    .replacement {
        transition: .5s ease;
        opacity: 0;
        /* position: absolute; */
        /* top: 50%;
          left: 50%; */
        /* transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%) */
        /* margin-bottom: -10rem; */
        /* background-color: transparent; */
    }

    .change {
        background-color: white;
        color: black;
        /* font-size: 16px; */
        padding: 1rem 1rem 1rem 1rem;
        margin: 0 0rem 3rem 0rem;
        border-radius: 5px;
    }

    .song:hover .fade {
        opacity: 0.3;
    }

    .song:hover .replacement {
        opacity: 1;
    }

    .audio {
        max-width: 20rem;
    }

    .plus {
        background-color: rgba(0, 0, 0, .5);
        font-size: 2rem;
        color: white;
        margin-left: 2rem;
    }
</style>