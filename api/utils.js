
const express = require ("express");
const  mongoose  = require("mongoose");
const router = express.Router();
const Charity = require ('../classes/charity')

router.get('/stats',(req,res)=>{
  console.log("[GET] utils/stats")
res.status(200).json(stats);
})

router.get('/topEvents',(req,res)=>{
  console.log("[GET] utils/topEvents")
res.status(200).json(topEvents);

})

router.get('/Search',(req,res)=>{
  console.log("[GET] utils/Search")
res.status(200).json(searchUtils);
})

module.exports = router;



searchUtils = [
  ["Rotaract Cosmo ","Rotaract Alpha","Leo Marsa",
"Croissant Rouge Ariana", "Rotaract ESSEC",
"Rotaract Carthage Amilcar"]
,["Hiver Au chaud","Rac Foot",
"Sensiblisation Cancer","SDF"

]]

topEvents = [{
    title: "Canada",
    image : "https://images.pexels.com/photos/2463268/pexels-photo-2463268.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },{
   title: "France",
   image : "https://images.pexels.com/photos/1750820/pexels-photo-1750820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },{
   title: "China",
   image : "https://images.pexels.com/photos/746916/pexels-photo-746916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },{
   title: "USA",
   image : "https://images.pexels.com/photos/2071581/pexels-photo-2071581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
 ];

 stats = [{
    title : "Donations Made",
    value : 10023,
 },{
   title : "Active Charities",
   value : 103,
 },{
   title : "Active Donors",
   value : 950,
 },{
   title : "Events Funded",
   value : 1503,
 }
 ]