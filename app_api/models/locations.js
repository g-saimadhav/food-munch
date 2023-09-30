var mongoose = require('mongoose');

var foodmunch = new mongoose.Schema({
    name: String,
    items:String
});

mongoose.model('fooditem',foodmunch);