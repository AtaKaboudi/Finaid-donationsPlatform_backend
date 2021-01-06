const express = require ("express");
const  mongoose  = require("mongoose");
const router = express.Router();
var bodyParser = require('body-parser')
const Charity = require ('../classes/charity');
const utils =require ('./utils')
var jsonParser = bodyParser.json()

// get main ninfo 
router.get('/',(req,res)=>{
    Charity.find({}, 'name rating location ')
    .exec()
    .then(docs => {
        console.log("[GET] Charity ");
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
    })
})


// get chairty by id

router.get('/:charityID', function(req,res,next){
    Charity.find({_id : req.params.charityID})
    .exec()
    .then((resu)=>{
        console.log("[GET] Charity by iD");
        res.status(200).json(resu);
    })
    .catch((err)=>console.log(err));
    
    })


    //get chairty by name 

    router.get('/name/:charityName', function(req,res,next){

        Charity.find({name : req.params.charityName})
        .exec()
        .then((resu)=>{
            console.log("[GET] Charity by name");
            res.status(200).json(resu);
        })
        .catch((err)=>console.log(err));
        
        })

        //handels login

    router.get('/auth/:username/:password',async (req,res,next)=> {
        console.log("[GET] charity/auth");
       let found 
       let id ;
   await  Charity.exists({username:req.params.username,password:req.params.password},(err,resu)=>{
     if(err){
         res.send(err)

     }else{
         found = resu;
     }
     });
    await  Charity.find({username:req.params.username,password:req.params.password}).exec().then((resu)=>{  
        try{
          id = resu[0]._id;
        }catch(error) {
            console.log(error);
            id ="0";
        } 
        
        });
    
    console.log(found +"/"+ id)
    res.send({
        "exists": found ,
        "id" : id ,
    });
        })


        //SIGN IN create charity with usernaùe pass and name and return it's id

        router.post('/signup/:charityName/:username/:password',(req,res,next)=>{
            console.log('[POST] signUp')
            let charity = new Charity({
                _id : new mongoose.Types.ObjectId(),
                name : req.params.charityName,
                username : req.params.username,
                password : req.params.password,
            })
            charity.save().catch((err)=>console.log(err));
            
            //Add cahrity in stats
            utils.addCharity();
            res.status(200).send(charity._id)

        })

        // UPDATE CHARITY INFO ALL BUT SIGN UP ATTRIBUTES
        router.post('/update/:item',jsonParser,(req,res,next)=>{
            console.log('[POST] Update Charity')    
           Charity.findOneAndUpdate({_id:req.body.id},{[req.params.item] : req.body.newValue}).catch((err)=>{console.log(err)})
        console.log('[Change] ['+req.params.item+']  ==> '+req.body.newValue)
           res.status(200).send('Updated');
        })



      
       





        // Change Rating
     router.post('/rating',jsonParser, async function(req,res,next){ 
         let newRating = 0;
        console.log('[POST] charity / rating')
       await Charity.find({name : req.body.name}).exec().then((res)=>{
            if ((req.body.rating == 1) &&(res[0].rating != 10)) {
                 newRating = res[0].rating + 0.1;
            }
            if ((req.body.rating == -1 ) && (res[0].rating != 0)) {
                 newRating = res[0].rating - 0.1 ;
            }
        })
        await Charity.update({name: req.body.name}, {rating : Math.round(newRating*10)/10 });
    })

    




router.post('/', function (req,res,next) {
    /*
    const charity = new Charity ({
    _id :  new mongoose.Types.ObjectId(),
    name : req.body.name,
    location :req.body.location,
    initiatives :req.body.initiatives,
     donations: req.body.donations ,
     rating :req.body.rating,
     contact : req.body.contact,
     represetative: req.body.representative ,
    })
    charity.save().then(result =>{
        console.log(result);
    }).catch(err =>{
        console.log(err);
    })
    res.status(200).json({
        "message :": "Post Request to /",
        "created : " : charity,
    })
*/
})

module.exports = router




/* For seeding 
  _id :  new mongoose.Types.ObjectId(),
    name: 'Rotaract alpha ',
    location :'Aouina ,Tunis',
    initiatives :[' Blood Donation  , Sensibilisation Cancer, formation violence'],
     donations: ['20','600','200','100','50','10'],
     rating :5,
     contact : ['alpha@gmail.com','00000000','fb: Rac alpha','instagarm: Rac alpha'],
     represetative: 'flen fouleni',



      "location" :"Ain Zaghouane ,Tunis",
    "initiatives" :["Arbres", "Hiver Au chaud","Assistance Aveugle"],
     "donations": ["20","600","200","100","50","10"],
     "rating" :5,
     "contact" : ["alpha@gmail.com","00000000","fb: Rac alpha","instagarm: Rac alpha"],
     "represetative": "flen fouleni"
     */