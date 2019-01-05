var orm = require("../config/orm.js")

//selectall
var note = {
  selectAll: function(cb) {
    console.log ("select all")
    orm.selectAll("notes", function(res) {
      cb(res)
   })
  },

  //insertOne
  insertOne: function(cols, vals, cb) {
    orm.insertOne("notes", cols, vals, function(res) {
      cb(res)
    })
  },

  ///updateOne
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("notes", objColVals, condition, function(res) {
      cb(res)
    })
  }
}

module.exports = note