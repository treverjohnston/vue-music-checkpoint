import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)
var production = window.location.host.includes('localhost')
var ip = !production ? '//bcw-music.herokuapp.com' : '//localhost:3000'
// var ip = '//bcw-music.herokuapp.com'
var store = new vuex.Store({
  state: {
    myTunes: [],
    results: [],
    myPlaylist: [],
    log: false
  },
  mutations: {
    setResults(state, results) {
      let songs = results.filter(function (song) {
        return song.kind == 'song'
      })
      state.results = songs
    },
    addToMyTunes(state, song) {
      state.myTunes.push(song)
      store.dispatch('getMyTunes')
    },
    updateSongs(state, songs) {
      // debugger

      state.myTunes = songs.sort(function (a, b) {
        return a.position - b.position
      })
    },
    retrieveTunes(state) {
      var tunes = state.myTunes
      store.dispatch('putTracksAdd', tunes)
    },
    
    changeLog(state) {
      state.log = !state.log
    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.getJSON(apiUrl).then(data => {
        var songList = data.results.map(function (song) {
          let artistShort = ''
          let name = ''
          if (song.collectionName.length > 20 || song.trackName.length > 20) {
            for (var i = 0; i < song.collectionName.length; i++) {
              var char = song.collectionName[i];
              if (artistShort.length < 21) {
                artistShort += char
              }
              if (artistShort.length == 20) {
                artistShort += '...'
              }
            }
            for (var i = 0; i < song.trackName.length; i++) {
              var char = song.trackName[i];
              if (name.length < 20) {
                name += char
              }
              if (name.length == 19) {
                name += '...'
              }
            }
            return {
              _id: song.trackId,
              kind: song.kind,
              title: name,
              albumArt: song.artworkUrl100,
              artist: song.artistName,
              album: artistShort,
              price: song.collectionPrice,
              preview: song.previewUrl
            };
          }
          return {
            _id: song.trackId,
            kind: song.kind,
            title: song.trackName,
            albumArt: song.artworkUrl100,
            artist: song.artistName,
            album: song.collectionName,
            price: song.collectionPrice,
            preview: song.previewUrl
          };
        })
        commit('setResults', songList)
      })
        .fail(err => {
          console.error(err)
        })
    },
    getMyTunes({ commit, dispatch }) {
      //this should send a get request to your server to return the list of saved tunes
      $.get(ip + '/api/songs')
        .then(songs => {
          // console.log(songs)
          commit('updateSongs', songs)
        })
        .fail(err => {
          console.error(err)
        })
    },


    addToMyTunes({ commit, dispatch }, track) {
      //this will post to your server adding a new track to your tunes
      $.post(ip + '/api/songs', track)
        .then(song => {
          // console.log(song)
          commit('addToMyTunes', song)
        })
        .fail(err => {
          console.error(err)
        })
    },


    removeTrack({ commit, dispatch }, trackId) {
      $.ajax({
        contentType: 'application/json',
        method: 'DELETE',
        url: ip + '/api/songs/' + trackId
      })
        .then(songs => {
          // console.log(songs)
          dispatch('getMyTunes')
        })
        .fail(err => {
          console.error(err)
        })
    },

    promoteTrack({ commit, dispatch }, payload) {

      // console.log(payload)
      if (payload.tune.position >= 1) {
        var toMove = {}
        // console.log(payload)
        for (var i = 0; i < payload.tunes.length; i++) {
          var item = payload.tunes[i];
          if (item.position == payload.tune.position - 1) {
            toMove = item
          }
        }
        toMove.position += 1
        var obj = {
          tune: payload.tune,
          toMove: toMove
        }
        payload.tune.position -= 1
        // console.log('obj', obj)
        $.ajax({
          contentType: 'application/json',
          method: 'PUT',
          url: ip + '/api/songs/promote/' + payload.tune._id,
          data: JSON.stringify(obj)
        })
          .then(songs => {
            // console.log(songs)
            dispatch('getMyTunes')
          })
          .fail(err => {
            console.error(err)
          })
      }

    },
    demoteTrack({ commit, dispatch }, payload) {

      if (payload.tune.position < payload.tunes.length) {
        var toMove = {}
        for (var i = 0; i < payload.tunes.length; i++) {
          var item = payload.tunes[i];
          if (item.position == payload.tune.position + 1) {
            toMove = item
          }
        }
        toMove.position -= 1
        var obj = {
          tune: payload.tune,
          toMove: toMove
        }
        payload.tune.position += 1
        // console.log('obj update', obj)
        $.ajax({
          contentType: 'application/json',
          method: 'PUT',
          url: ip + '/api/songs/promote/' + payload.tune._id,
          data: JSON.stringify(obj)
        })
          .then(songs => {
            // console.log(songs)
            dispatch('getMyTunes')
          })
          .fail(err => {
            console.error(err)
          })
      }

    },

    putTracksAdd({ commit, dispatch }, tracks) {
      for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        // console.log(track)
        $.post(ip + '/api/songs', track)
          .then(song => {
            // console.log('added')
            dispatch('getMyTunes')
          })
          .fail(err => {
            console.error(err)
          })
      }
    },
    // demoteTrack({ commit, dispatch }, payload) {
    //   //this should decrease the position / upvotes and downvotes on the track
    //   $.ajax({
    //     contentType: 'application/json',
    //     method: 'PUT',
    //     url: ip + '/api/songs/'
    //   })
    //     .then(songs => {
    //       // console.log(songs)
    //       commit('demoteTrack', payload.trackId)
    //     })
    //     .fail(err => {
    //       console.error(err)
    //     })
    // },
    login({ commit, dispatch }, obj) {
      $.post(ip + "/login", obj)
        .then((res) => {
          // res = JSON.parse(res);
          if (res.message) {
            // console.log('logged in')
            dispatch('changeLog')
          } else if (res.error) {
            alert("Invalid Email or password");
          }

        })
        .catch(() => console.log('error'))
    },
    register({ commit, dispatch }, obj) {
      $.post(ip + "/register", obj)
        .then((res) => {
          // res = JSON.parse(res);
          if (res.message) {
            console.log('account created')
            dispatch('login', obj)
          } else if (res.error) {
            alert("Invalid Email or password");
          }
        })
        .catch(() => console.log('error'))
    },
    changeLog({ commit, dispatch }) {
      commit('changeLog')
    }

  }
})

export { store }
