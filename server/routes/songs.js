var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var server = express();


var songSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  kind: { type: String, required: true },
  title: { type: String, required: true },
  albumArt: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
  price: { type: String, required: true },
  preview: { type: String, required: true }

},{ _id: false })

var playlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: Array, required: true, default: [] }
})

var Playlist = mongoose.model('Playlist', playlistSchema)

var Songs = mongoose.model('Song', songSchema)


// mySongs get
router.get('/', function (req, res, next) {
  Songs.find({})
  .then((songs) => {
    // console.log('getting')
      res.send(songs)
    })
    .catch(next)
})

//mySongs post
router.post('/', function (req, res, next) {
  // console.log('at post')
  // console.log(req.body)
  Songs.create(req.body)
    .then((song) => {
      // console.log(req.body.title, 'added')s
      // console.log(song)
      res.send(song)
    })
    .catch(next)
})


router.get('/:songId', function (req, res, next) {
  let songId = req.params.songId
  Songs.findById(songId)
    .then(song => {
      if (song) {
        res.send(song)
      } else {
        next({ message: 'You suck!' })
      }
    })
    .catch(next)
})

// mySongs delete
router.delete('/:songId', (req, res, next) => {
  var songId = req.params.songId
  Songs.findByIdAndRemove(songId)
    .then(song => {
      res.send({ message: 'Successfully deleted.' })
    })
    .catch(next)
})

router.put('/', (req, res, next) => {
  Songs.remove({})
  .then(song=>{
    console.log('songs deleted')
    res.send({message: "deleted all songs"})
  })
  .catch(next)
})

router.use(defaultErrorHandler)

function defaultErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.json({ success: false, error: err })
  } else {
    res.json({ success: false, error: err.message })
  }
}

module.exports = router