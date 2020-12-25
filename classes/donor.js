
const mongoose = require ('mongoose')
const donorSchema = mongoose.Schema ({
    _id : mongoose.Schema.Types.ObjectId,
  name:String,
  location : String,
  donations : [String],
  charities  :[String],
  age : Number,
  rating: Number,
  password: String,
})

module.exports = mongoose.model('Donor',donorSchema);

/*
name : "Ata Kaboudi",
location "Carthage, Tunis ",
age : 21 ,
donations : [200,7000,10,443],
charities : ["Rac Cosmo", "Rotaract Alpha", " Rac Cosmo","Rac Cosmo"],
*/