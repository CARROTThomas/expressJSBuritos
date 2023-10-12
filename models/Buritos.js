


const mongoose = require('mongoose')

const BuritosSchema = new mongoose.Schema({

    name:{
        type: mongoose.SchemaTypes.String
    },
    description:{
        type: mongoose.SchemaTypes.String
    },
    price: {
        type : mongoose.SchemaTypes.Number
    }

})

module.exports = mongoose.model('Buritos', BuritosSchema)