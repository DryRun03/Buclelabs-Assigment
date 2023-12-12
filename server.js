const express= require('express')
const mongoose = require('mongoose')
const app = express()
const Books = require('./models/booksModel')


app.use(express.json());
//routes


//Add Books to the DB
app.post('/books',async(req,res)=>{
    try {
        const books = await Books.create(req.body);
        res.status(200).json(books);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Get All books
app.get('/books',async(req,res)=>{
    try {
        const books = await Books.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//Get Books By Id
app.get('/books/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const books = await Books.findOne({ id });
        res.status(200).json(books);
    } catch (error) {
        res.status(404).json("Book with this id not found");
    }
})


// Update/edit Books by Id
app.put('/books/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const updatedBook = await Books.findOneAndUpdate(
            { id },
            req.body,
            { new: true, runValidators: true }
        );
        if (updatedBook) {
            res.status(200).json(updatedBook);
        } else {
            res.status(404).json({ message: 'Book not found with this id' });
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
})


//Delete Books API by Id
app.delete('/book/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const book = await Books.findOneAndDelete({id});
        if(book){
            res.status(200).json(book);
        }else{
            res.status(404).json("Book not found with this id");
        }
    } catch (error) {
        res.status(500).json(error.message);
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