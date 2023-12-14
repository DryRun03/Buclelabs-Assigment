const express = require('express');
const router = express.Router();
//This is for model class
const Books = require('../models/booksModel')

//Add Books to the DB
router.post('/books',async(req,res)=>{
    try {
        const books = await Books.create(req.body);
        res.status(200).json(books);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Get All books
router.get('/books',async(req,res)=>{
    try {
        const books = await Books.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//Get Books By Id
router.get('/books/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const books = await Books.findOne({ id });
        res.status(200).json(books);
    } catch (error) {
        res.status(404).json("Book with this id not found");
    }
})


// Update/edit Books by Id
router.put('/books/:id',async(req,res)=>{
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
router.delete('/book/:id',async(req,res)=>{
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

module.exports = router;