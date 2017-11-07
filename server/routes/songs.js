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
  preview: { type: String, required: true },
  position: { type: Number, required: true, default: 0 }

})

var Songs = mongoose.model('Song', songSchema)


// mySongs get
router.get('/', function (req, res, next) {
  Songs.find({})
    .then((songs) => {
      res.send(songs)
    })
    .catch(next)
})

//mySongs post
router.post('/', function (req, res, next) {
  Songs.create(req.body)
    .then((song) => {
      res.send(song)
    })
    .catch(next)
})

router.put('/promote/:songId', function (req, res, next) {
  console.log('body', req.body)
  var id = req.params.songId
  var id2 = req.body.toMove._id
  console.log('id', id)
  Songs.findByIdAndUpdate(id, req.body.tune)
    .then(song => {
      res.send('1 done')
      Songs.findByIdAndUpdate(id2, req.body.toMove)
        .then(song => {
          res.send('2 done')
        })
        .catch(next)
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
    .then(song => {
      console.log('songs deleted')
      res.send({ message: "deleted all songs" })
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