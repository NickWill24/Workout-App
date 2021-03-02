const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Balance = new Schema(
{
    exerciseItem: { type: String, required: true },
    time: { type: String, required: false },
    numOfRep: { type: String, required: false  }
    
},
{
    timestamps: true
}
)

module.exports = mongoose.model('balance', Balance)
