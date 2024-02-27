const mongoose = require("mongoose");

const dbUrl = "mongodb+srv://revatee:reva@cluster0.v87vgse.mongodb.net/login";



mongoose.connect(dbUrl)
.then(()=>{
    console.info("connected");
})
.catch((e)=>{
    console.log("Erroe",e);
});

const LogInSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("Collection1",LogInSchema)

module.exports=collection