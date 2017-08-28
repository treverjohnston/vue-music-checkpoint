<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-3">
                <div v-if="loggedIn">
                    <form @submit.prevent="login()">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="email" v-model="email">
                        </div>
                        <input type="password" class="form-control" placeholder="Password" v-model="password">
                        <button type="submit" class="btn btn-default btn-login">Login/Register</button>
                    </form>
                </div>
            </div>
            <!-- </div>
        <div class="row"> -->
            <div class="col-xs-9">
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
                artist: '',
                email: '',
                password: ''
            }
        },
        methods: {
            getMusic() {
                this.$store.dispatch("getMusicByArtist", this.artist)
            },
            login() {
                //console.log(store.login)
                var obj = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('login', obj)
                // toggleLogin()
            }
        },

        computed: {
            songs() {
                return this.$store.state.results
            },
            loggedIn(){
                return this.$store.state.log
            }
        }
    }

</script>
<style scoped>
    .form {
        padding: 2rem 0 3rem 0;
    }

    input {
        background-color: transparent;
        color: white;
    }

    .btn {
        background-color: transparent;
        color: white;
    }
</style>