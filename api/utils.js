
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
    image : "https://previews.dropbox.com/p/thumb/ABBZM-QVgQMGubXAGHVnkpiIZwsptgClDPckDgUxRvwRX1d4oegkuTXKvQx4mfPIf_TXnZxhTYFeQnDXBvpwrCZGs00fPF6PTB5YtsJDhdsapSVFC74E-7_TfE1xOnPnTkGD6HTjg9RQWaahp4TYZu61UvSulkhh6WubWO1oud_UXG_C_Cf-rGxVi8FTGJtkel1A5ii9YK0lcI-zSUjMWzj-wfslZ6M0-7hfOy-1fsM02p9vKicW-zJsw6-t_lSjqeca78YrdML_YVSF96xYleLJQoSaZ8rgC15Z3pgnlEFLRMPoglDtHNnEKRjaPG9wPKd3gWvQEyUrRMLKZWVlbWNg8RarVeuCxDMZGuEH2iyCUg/p.jpeg?fv_content=true&size_mode=5"
  },{
   title: "France",
   image : "https://previews.dropbox.com/p/thumb/ABBmvvqZplggKminD52rNjPnRdhzroJGKRWav4llLvAL8lQMI4QTi79TzuoVv_h2dMCmxBWEofyzhMTHlgF0eOF1qj4jFr4yx6JC8Ktv4kfkHzyxNu-eS_6dXUHQwSE88ToXfj84sSsPlAaKWILjltTJqr7oPLtU7lyaa7v_uodKIRbE5ZCxSalf0_9I0FBSrzv6zaaqh7xDtquRn2tgC_-ZSd3tAMFYDhNz-h8AxtKH6r4mpJFDP0ZnkmNTITJqPZXirqxS4p96Dk7zxgKEs17wH2PJa1WFMaPJlzC4UCA4tGneXvA-w7cmiaJ7Gx0xF2wm63ynRcBl26My5KqWaVT1HcSIFXaiiKgspgVS6FD7yA/p.jpeg?fv_content=true&size_mode=5"
  },{
   title: "China",
   image : "https://previews.dropbox.com/p/thumb/ABAmbVM59EzPGW08kOhxCu-N3OZqe5-r_o_X1QCmixTp7MN4jXGFaiVk6icGZIoLAduK4d878b2GCJ7JZ2cZL_TsmU31b8e6Y3fE9hq6DiOf26zy6JkI6_Q3Xff1Aht5J_K04IIYC_0LcD8EdmAY9u-8qmOvusqb0cIC9fFYbvbvFD5OOgw6ODTkETPnFC-5SqJSRK7jcw1r3tmrXKEfQgVs7M0xRxOYG3mSLvmFJxgjCt9ai6QhSIPAknpBKBurNxlTkYS5a6Q1hqb58fdtP0YQ9CyIDP9lBv2LBDX_V3w3hXlrpohkhrqat34KxO6zMufvu5j_JxbptTIx35fW4VmHp1MNHdBAuZLtN74IqIjFCA/p.jpeg?fv_content=true&size_mode=5"
  },{
   title: "USA",
   image : "https://previews.dropbox.com/p/thumb/ABCaWd5bhI360-1V0GrsTNlQ_YWn5XH2es2hgtmwlJW5_T91k39nYQfr5-TnJVm14rnqrmwJpvUQWDD9JLdyQ5iCeABCAL4va9DRMKT9LkM0PWwdQk8KsecSXEZx_X1PPQIZLJxunKUJINbOySNey0GmlI4EfCdXSOJVaRtXhQ6q2sqIYAgItz5XyY-D38gCIEQWZVzeTkjaiJMqilRSr0AYyG64VtMh_tMLrEmOLzhpWD6IJ2wtBAXp_CGm2R6Jl2SjGfifmbAfeJeXa17RUyNq6jFeV2shpRFru8PkZ_HvR2vIZXSIR7W2jpfb5iI8t1RcuZFDSicxyQddT5ebPMK2pdafqZpGDSjD8b4GInQRQg/p.jpeg?fv_content=true&size_mode=5"
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