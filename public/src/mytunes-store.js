import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var ip = "//localhost:3000"

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },
  mutations: { 
    setResults(state, results){
      let songs = results.filter(function(song){
        return song.kind == 'song'
      })
      state.results = songs
      // console.log(songs)
    },
    addToMyTunes(state, song){
      state.myTunes.push(song)
    },
    updateSongs(state, songs){
      state.myTunes = songs
    }
  },
  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.getJSON(apiUrl).then(data=>{
        var songList = data.results.map(function (song) {
          // console.log(song)
          return {
            id: song.trackId,
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
      .fail(err =>{
        console.error(err)
    })
    },
    getMyTunes({commit, dispatch}){
      //this should send a get request to your server to return the list of saved tunes
      $.get(ip + '/api/songs')
      .then(songs =>{
          commit('updateSongs', songs)
      })
      .fail(err =>{
          console.error(err)
      })
    },
    addToMyTunes({commit, dispatch}, track){
      //this will post to your server adding a new track to your tunes
      $.post(ip+'/api/songs', track)
      .then(song=>{
          commit('addToMyTunes', song)
      })
      .fail(err =>{
          console.error(err)
      })
    },
    removeTrack({commit, dispatch}, trackId){
      $.ajax({
        contentType: 'application/json',
        method: 'DELETE',
        url: ip+'/api/songs/' + trackId
      })
        .then(songs=>{
          dispatch('getMyTunes')
        })
        .fail(err =>{
            console.error(err)
        })
    },
    promoteTrack({commit, dispatch}, trackId){
      
    },
    demoteTrack({commit, dispatch}, track){
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export {store}
