const express= require('express')
const mongoose = require('mongoose')
const app = express()
const Books = require('./models/booksModel')


app.use(express.json());
//routes

app.post('/books',async(req,res)=>{
    try {
        const books = await Books.create(req.body);
        res.status(200).json(books);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('mongodb+srv://pankajgarggarg03:s1MWiXQop2DhDPP1@cluster0.jnwj70s.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000,()=>{
        console.log('Node API app is running on port 3000')
    });
    console.log('Connected to MongoDB')
}).catch((error)=>{
    console.log(error)
})