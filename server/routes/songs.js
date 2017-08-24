var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var server = express();


var songSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true}
})

var Songs = mongoose.model('Song', songSchema)

router.get('/', function(req, res, next) {
    Songs.find({})
    .then((songs)=>{
      res.send(songs)
    })
    .catch(next)
})

router.post('/', function(req, res, next) {
    Songs.create(req.body)
    .then((song)=>{
        res.send(song)
    })
    .catch(next)
})

router.get('/:songId', function(req, res, next){
  let songId = req.params.songId
  Songs.findById(songId)
  .then(song =>{
    if(song){
    res.send(song)
    }else{
      next({message: 'You suck!'})
    }
  })
  .catch(next)
})

router.delete('/:songId', (req, res, next) => {
  var songId = req.params.songId
  Songs.findByIdAndRemove(songId)
  .then(song =>{
    res.send({message: 'Successfully deleted.'})
  })
  .catch(next)
})

router.put('/:songId', (req, res, next) =>{
  var songId = req.params.songId
  var updatedSongObj = req.body
  Songs.findByIdAndUpdate(songId, updatedSongObj)
  .then(song => {
    res.send({message: 'Successfully Updated Song'})
  })
  .catch(next)
})


router.use(defaultErrorHandler)

function defaultErrorHandler(err, req, res, next){
  if (req.xhr){
    res.json({success: false, error: err})
  }else{
    res.json({success: false, error: err.message})
  }
}

module.exports = router