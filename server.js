const express= require('express')
const mongoose = require('mongoose')
const app = express()

//routes
app.get('/',(req,res)=>{
    res.send('Hello Node API')
})






mongoose.connect('mongodb+srv://pankajgarggarg03:s1MWiXQop2DhDPP1@cluster0.jnwj70s.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000,()=>{
        console.log('Node API app is running on port 3000')
    })
    console.log('Connected to MongoDB')
}).catch((error)=>{
    console.log(error)
})