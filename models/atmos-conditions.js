const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema({});

//create schema for todo
const tweetModel = new mongoose.Schema({
  _id: "string",
  cityid: "string"
});

tweetModel.plugin(mongoosePaginate);
//create model for todo

module.exports = tweetModel;
