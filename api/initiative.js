const express = require ("express");
const  mongoose  = require("mongoose");
const router = express.Router();
const Initiative = require ('../classes/initiative');
const bodyParser = require ('body-parser');
var jsonParser = bodyParser.json()

router.get('/', function(req,res,next){
Initiative.find({},'type name charity current_budget image  ')
.exec()
.then((resu)=>{
    console.log("[GET] Initiative ");
    res.status(200).json(resu);
})
.catch((err)=>console.log(err));

})
router.get('/Type/:filterKey', function(req,res,next){
    const key = req.params.filterKey
    Initiative.find({type : key})
    .exec()
    .then((resu)=>{
        console.log("[GET] Initiative by Type ");
        res.status(200).json(resu);
    })
    .catch((err)=>console.log(err));
    
    })

    router.get('/Charity/:searchedElement', function(req,res,next){
        const search = req.params.searchedElement
        Initiative.find({charity : search})
        .exec()
        .then((resu)=>{
            console.log("[GET] Initiative by charity ");
            res.status(200).json(resu);
        })
        .catch((err)=>console.log(err));
        
        })
        
    router.get('/Event/:searchedElement', function(req,res,next){
        const search = req.params.searchedElement
        Initiative.find({name : search})
        .exec()
        .then((resu)=>{
            console.log("[GET] Initiative by charity ");
            res.status(200).json(resu);
        })
        .catch((err)=>console.log(err));
        
        })



    router.get('/Budget/:filterKey', function(req,res,next){
        const limit  = req.params.filterKey
        Initiative.find({current_budget : { $gte: limit, $lt : limit*10}})
        .exec()
        .then((resu)=>{
            console.log("[GET] Initiative by budget ");
            res.status(200).json(resu);
        })
        .catch((err)=>console.log(err));
        
        })

        

router.get('/:initiativeId', function(req,res,next){
    Initiative.find({_id : req.params.initiativeId})
    .exec()
    .then((resu)=>{
        console.log("[GET] Initiative by Id ");
        res.status(200).json(resu);
    })
    .catch((err)=>console.log(err));
    
    })

    router.post ('/comment',jsonParser,async function (req,res,next){
        console.log('[POST] initiative / comment');
        Initiative.findOneAndUpdate({_id : req.body.id}, {comments:req.body.comments}).exec().then((res)=>{console.log(res)});  
        
    })




module.exports = router;






/* FOR SEEDING
const initiative = new Initiative ({
    _id : new mongoose.Types.ObjectId(),
    charity : "Rotaract Carthage Amilcar ",
    name :"sensibilisation Corona ",
    description :"sensibiliser le grands publique sur la situatatios epidemique et ses conseqeuences",
    time : "30/1/2021",
    current_budget : 0 ,
    type : "Sensibilisation"
})
initiative.save().then(result => {console.log(result)}).catch((err)=> {console.log(err)});
res.status(200).json({
    "message :": "Post Request to /",
    "created : " : initiative,
})
*/