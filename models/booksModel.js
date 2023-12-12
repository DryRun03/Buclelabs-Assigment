const mongoose = require('mongoose')

const BooksSchema =mongoose.Schema(
    {
        id:{
            type: String,
            required:[true],
            unique: true
        },
        title:{
            type: String,
            required:[true,"Please enter a Book Name"]
        },
        author:{
            type: String,
            required:[true]
        },
        publishedYear:{
            type: Number,
            required:[true]
        }
    }
)

const Books = mongoose.model('Books',BooksSchema);
module.exports=Books;