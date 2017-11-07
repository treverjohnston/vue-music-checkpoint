<template>
    <div class="notresults">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-md-8">
                    <results></results>
                </div>
                <div class="col-xs-12 col-md-4">
                    <tunes></tunes>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Tunes from './Tunes'
    import Results from './Results'
    export default {
        name: 'notresults',
        data() {
            return {
                artist: ''
            }
        },
        computed: {
            songs() {
                return this.$store.state.results
            }
        },
        methods: {
            addToMyTunes(track) {
                this.$store.dispatch('addToMyTunes', track)
            }
        },
            components: {
            Tunes,
            Results
        }
    }

</script>


<style scoped>
    /* body {
        background-image: url("../assets/images/background.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        font-family: 'Slabo 27px', serif;
    } */

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
    }
</style>