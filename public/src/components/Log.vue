<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-3">
                <div v-if="!loggedIn">
                    <form @submit.prevent="login()">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="email" v-model="email">
                            <p>email: a@b.com</p>
                        </div>
                        <input type="password" class="form-control" placeholder="Password" v-model="password">
                        <p> password: abc</p>
                        <button type="submit" class="btn btn-default btn-login">Login</button>
                    </form>
                </div>
            </div>
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
        name: 'log',
        data() {
            return {
                artist: '',
                email: '',
                password: ''
            }
        },
        computed: {
            songs() {
                return this.$store.state.results
            },
            loggedIn(){
                return this.$store.state.log
            }
        },
        methods: {
            getMusic() {
                this.$store.dispatch("getMusicByArtist", this.artist)
            },
            login() {
                var obj = {
                    email: this.email,
                    password: this.password
                }
                // if (type == 'login'){
                this.$store.dispatch('login', obj)
                // }
                // if (type == 'reg'){
                // this.$store.dispatch('register', obj)
                // }
            }
        }
    }

</script>


<style>

</style>