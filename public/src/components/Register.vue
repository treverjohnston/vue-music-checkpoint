<template>
    <div class="container-fluid">
        <div class="row">
            <div class="text-center">
                <div class="col-xs-offset-5 col-xs-2">
                    <div v-if="!loggedIn">
                        <form @submit.prevent="register()">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="email" v-model="email">
                            </div>
                            <input type="password" class="form-control" placeholder="Password" v-model="password">
                            <button type="submit" class="btn btn-default btn-login">Register</button>
                        </form>
                    </div>
                    <div v-else>
                        <button class="btn btn-default"><a href="/">Return to Home</a></button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <results></results> -->
    </div>
</template>

<script>
    import Results from './Results'
    export default {
        name: 'register',
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
            loggedIn() {
                return this.$store.state.log
            }
        },
        methods: {
            getMusic() {
                this.$store.dispatch("getMusicByArtist", this.artist)
            },
            register() {
                var obj = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('register', obj)
            }
        },
        components: {
            Results
        }
    }

</script>


<style scoped>
    form {
        margin-top: 5rem;
    }
    .btn{
        margin-top: 2rem;
    }
</style>