const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://nigiljoseph2017:nigil@cluster0.gb23b3l.mongodb.net/db1?retryWrites=true&w=majority")
.then(()=>{console.log("Db connected")})
.catch(err=>console.log(err));

let sc=mongoose.Schema;
const studschema = new sc({
    Admno:String,
    Sname:String,
    Age:Number,
    Status:String
});

var studmodel =mongoose.model("Student",studschema)
module.exports =studmodel;

