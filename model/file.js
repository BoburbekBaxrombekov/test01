const mongoose = require('mongoose')

const Schema =  new mongoose.Schema({
    Ismi:{
        type: String
    },
     date:{
    type: Date,
    default:Date.now()}

})  


module.exports = mongoose.model('File',Schema)