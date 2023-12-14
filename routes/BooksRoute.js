const express = require('express');
const router = express.Router();
//This is for model class
const Books = require('../models/booksModel')

const {getAllBooks,getBookById,updateBooks,addBooks,deleteBooks} = require('../controller/bookController');

//Add Books to the DB
router.post('/',addBooks);

//Get All books
router.get('/',getAllBooks);

//Get Books By Id
router.get('/:id',getBookById);

// Update/edit Books by Id
router.put('/:id',updateBooks);

//Delete Books API by Id
router.delete('/:id',deleteBooks);

module.exports = router;