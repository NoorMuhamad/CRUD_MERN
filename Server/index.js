const express = require("express")
const mongoose = require("mongoose")
const StudentModel= require("./Models/Student")
mongoose.connect("mongodb://noor:Rasheed1234@merncluster-shard-00-00.ozol5.mongodb.net:27017,merncluster-shard-00-01.ozol5.mongodb.net:27017,merncluster-shard-00-02.ozol5.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-sbbgxa-shard-0&authSource=admin&retryWrites=true&w=majority",{
    useNewUrlParser:true,
})
// CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain.
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json()) //this allow to received infromation from front in the format of json
app.post("/insert", async (req,res)=>{
    const Name=req.body.Name
    const Email=req.body.Email
    const Department=req.body.Department
    const City=req.body.City
    const student= new StudentModel({Name,Email,Department,City})
    try {
        await student.save();
    } catch (error) {
        console.log(error)
    }
})
app.get("/read", async (req,res)=>{
        StudentModel.find({},(err,result)=>{
            if(err){
                res.send(err);
            }
            else{
                res.send(result);
            }
        });
})
app.get("/read/:id", async (req,res)=>{
    const _id = req.params.id;
    StudentModel.findById({_id},(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})
app.delete("/delete/:id",async (req,res)=>{
    const id = req.params.id;
    await StudentModel.findByIdAndDelete(id)
})
app.put("/updatedata" ,async (req,res)=>{
    const _id=req.body.id
    const Name=req.body.Name
    const Email=req.body.Email
    const Department=req.body.Department
    const City=req.body.City
    console.log(_id,Name,Email,Department,City)
    await StudentModel.findByIdAndUpdate(_id,{Name,Email,Department,City},function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Updated User : ", docs);
        }})
})
app.listen(3001,()=>{
    console.log("Server is running on port 3001.....")
})