const express=require("express");
const cors=require("cors")
const multer =require('multer')
const storage =multer.memoryStorage();
const upload =multer({storage:storage});

const studmodel = require("./model/student");
const certmodel = require("./model/certdetails");


const app=new express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());




app.get('/',(request,response)=>{
    response.send("hi database")
})

//For Saving student data

app.post('/snew',(request,response)=>{
    new studmodel(request.body).save();
    response.send("Record saved Sucessfully")
})

//For retriving student data
app.get('/sview',async(request,response)=>{
    var data = await studmodel.find();
    response.send(data)
})

//For update status of student -delete
app.put('/updatestatus/:id',async(request,response)=>{
    let id = request.params.id
    await studmodel.findByIdAndUpdate(id,{$set:{Status:"INACTIVE"}})
    response.send("Record Deleted")
})

//For modifing the details student
app.put('/sedit/:id',async(request,response)=>{
    let id = request.params.id
    await studmodel.findByIdAndUpdate(id,request.body)
    response.send("Record updated")
})


//For saving certificatedetails
app.post('/certnew',upload.single('certphoto'),async(request,response)=>{
const {sid,qualification} =request.body
const newdata = new certmodel({
    sid,
    qualification,
    certphoto:{
        data:request.file.buffer,
        contentType:request.file.mimetype,
    }
})
await newdata.save();
})

app.listen(4005,(request,response)=>{
    console.log("Port is running in 4005")
})