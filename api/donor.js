const express = require ("express");
const  mongoose  = require("mongoose");
const router = express.Router();
const Donor = require ('../classes/donor');
const { post } = require("./initiative");





router.post('/register',(req,res,next)=>{

    console.log(req.body.age);
    res.status(200).json( {"message":"got it"})
    /*
    let donor = new Donor ({
        _id : new mongoose.Types.ObjectId() ,
        name : req.body.name ,
        password : req.body.password ,
        location : req.body.location ,
        age : req.body.age ,
    })
    donor.save((err) => {
        if (err) {
            res.status(200).json({
                message : 'registration failed'
            })
        }
    })
    */
})

// get main ninfo 
router.get('/',(req,res)=>{
 
    Donor.find({}, 'name rating location ')
    .exec()
    .then(docs => {
        console.log("[GET] DONOR ");
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
    })
    
})


router.get('/:ID', function(req,res,next){
    Donor.find({_id : req.params.ID})
    .exec()
    .then((resu)=>{
        console.log("[GET] Charity by id");
        res.status(200).json(resu);
    })
    .catch((err)=>console.log(err));
    
    })


    module.exports = router 




    /*
     FRO SEEDING 
        
    const donor = new Donor ({
    _id : new mongoose.Types.ObjectId(),
    name : "Batul Salhab",
    location: "Menzah, Tunis ",
    age : 21 ,
    rating: 10,
    donations : [20,700,130,43],  
    charities : ["Rac alpha", "Rotaract  Carthage Amilcar", " Rotaract afra ","Rac Cosmo"],
    })

donor.save()
.then( (result) => {console.log(result)})
.catch((err)=> {console.log(err)});

res.status(200).json ({
    'created ' : donor
})
*/
