const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Balance = new Schema(
{
    name: { type: String, required: true },
    time: { type: String, required: false },
    numOfRep: { type: String, required: false  },
    image: { type: String, required: false },
    description: { type: String, required: true}
},
{
    timestamps: true
}
)

module.exports = mongoose.model('balance', Balance)
