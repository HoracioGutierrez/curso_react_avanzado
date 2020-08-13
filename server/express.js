const express = require("express")
const mongoDB = require("mongodb")

const { MongoClient } = mongoDB

const server = express()
server.use(express.json())


let usuarios_collection


server.post('/api/login',(req,res)=>{

    let {usuario:username,password} = req.body
    
    usuarios_collection.findOne({
        $or : [{username},{email:username}],
        password
    },(err,resultado)=>{

        if(err){
            console.log(err)
            res.status(500).json({err:true,data:"No se pudo completar el login"})
        }

        if(resultado){
            res.json({err:false,data:"Login Success!"})
        }else{
            res.status(400).json({err:true,data:"Usuario o Contraseña invalidos!"})
        }
    })

})

server.post('/api/signup',(req,res)=>{
    let {usuario:username,email,password} = req.body

    usuarios_collection.insertOne({username,email,password},(err,resultado)=>{

        if(err){
            console.log(err)
            res.status(500).json({err:true,data:"No se pudo completar crear la cuenta"})
        }

        if(resultado.insertedCount){
            res.json({err:false,data:"Cuenta creada!"})
        }else{
            res.status(400).json({err:true,data:"No se pudo crear la cuenta"})
        }

    })
})


MongoClient.connect("mongodb://localhost:27017",{useNewUrlParser:true,useUnifiedTopology:true},(err,cliente)=>{
    if(err){throw new Error(err)}

    console.log("DB en 27017")

    let db = cliente.db("curso_react")
    usuarios_collection = db.collection("usuarios")

    server.listen(8000)
})
