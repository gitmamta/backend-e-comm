const mongoose=require("mongoose");
const addressSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    

    
},{timestamps:true})

const User=mongoose.model('Address',addressSchema);

module.exports=User;