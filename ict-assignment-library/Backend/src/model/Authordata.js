const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.mtvj9.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    aname : String,
    nationality : String,
    fambook : String,
    img : String,
    des : String
});

var Authordata = mongoose.model('authordatas', AuthorSchema);

module.exports =  Authordata;