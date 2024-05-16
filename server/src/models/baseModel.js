const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stoc:{
        type: String,
        required: true
    },
    sdate: {
        type: Date,
        required: true,
        default: Date.now
    }

})


module.exports = mongoose.model('test', testSchema) //schema name