const mongoose = require('mongoose');

const connectDB = ()=> {
    try {
        mongoose.connect('mongodb://0.0.0.0:27017/ecom');
        console.log("connected to DB successfully")
    } catch(err) {
        console.log(err)
        console.log("could not connect to Database");
    }
}

module.exports = connectDB;