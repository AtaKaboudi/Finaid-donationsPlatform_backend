const mongoose = require ('mongoose')
const initiativeSchema = mongoose.Schema ({
_id : mongoose.Schema.Types.ObjectId,
charity : String,
name:String,
description:String,
longDescription:String,
time:String,
current_budget:Number,
type: String ,
image : String,
comment:[String],
})




module.exports = mongoose.model('Initiative',initiativeSchema);
