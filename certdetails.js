const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://nigiljoseph2017:nigil@cluster0.gb23b3l.mongodb.net/db1?retryWrites=true&w=majority")
.then(()=>{console.log("Db connected")})
.catch(err=>console.log(err));

let sc=mongoose.Schema;
const certschema = new sc({
    sid:{type:mongoose.Schema.Types.ObjectId,ref:'students'},
    qualification:String,
    certphoto:{
        data : Buffer,
        contentType:String,
    }
    
});

var certmodel =mongoose.model("certificate",certschema)
module.exports =certmodel;

