const mongoose=require("mongoose");
const playerSchema=new mongoose.Schema({
    name:String,
    age:Number,
    position:String,
    jerseyNo:Number
})
module.exports=mongoose.model("Player",playerSchema);