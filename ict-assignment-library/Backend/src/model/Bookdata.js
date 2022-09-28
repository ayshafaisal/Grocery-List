const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.mtvj9.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    btitle : String,
    author : String,
    genre : String,
    img : String,
    des : String
});

var Bookdata = mongoose.model('bookdatas', BookSchema);

module.exports =  Bookdata;