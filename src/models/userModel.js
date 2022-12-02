const mongoose = require("mongoose") 
 const userSchema = new mongoose.Schema(
 
    { 
      title: {
        type: String,
        required:true,
        enum:["Mr", "Mrs", "Miss"],
        trim: true
      },
      name: {type:String,
        required:true,
        trim:true
      },
      phone: {
        type:String, 
        required:true, 
        unique:true,
        trim:true
      },
      email: {
        type:String, 
        required:true, 
        unique:true,
        trim: true
      }, 
      password: {
        type:String,
         required:true, 
        minLen:8,
        maxLen:15,
        trim:true
        },
      address: {
        street: {type:String,required:true},
        city: {type:String,required:true},
        pincode: {type:String,required:true}
      },
     
    },
    { timestamps: true }
  )
  module.exports = new mongoose.model("User", userSchema);
 