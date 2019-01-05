var express = require("express")

var router = express.Router()


var note = require("../models/note.js")



router.get("/", function(req, res) {
 
  note.selectAll(function(data) {
  console.log(data, "result")
   var hbsObject = {
     notes: data
    }
    res.render("index", hbsObject)
 
  })
 
})

router.post('/notes', function(req, res) {
  note.insertOne([
    'notes_name'
  ], [
    req.body.notes_name
  ], function(data) {
    res.redirect('/')
  })
})


router.put("/api/notes/:id", function(req, res) {
  var condition = "id = " + req.params.id
  note.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end()
    } else {
      res.status(200).end()
    }
  })
})



module.exports = router