const http = require('http');
const mongoose = require ('mongoose')
const express = require('express');
const app = express();
const cors = require ('cors');
const { send } = require('process');
const Charity = require ('./classes/charity');



app.listen(3000);
app.use((req,res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*"); 

    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,GET,DELETE");
        return res.status(200).json({});
    }
    next();
})
app.use(cors());

mongoose.connect('mongodb+srv://AtaKaboudi:Ata29100560*@cluster0.i8am6.mongodb.net/here_for_you?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true 
})


const charityRoute = require ('./api/charity');
const initiativeRoute = require ('./api/initiative')
const donorRoute = require ('./api/donor')
const utilsRoute = require ('./api/utils')
app.use("/utils",utilsRoute);
app.use("/charity",charityRoute);
app.use("/initiative",initiativeRoute);
app.use("/donor",donorRoute);


