const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Strength = new Schema(
{
    exerciseItem: { type: String, required: false },
    time: { type: String, required: false },
    numOfRep: { type: String, required: false  },
    image: { type: String, required: false },
    description: { type: String, required: true}
},
{
    timestamps: true
}
)

module.exports = mongoose.model('strength', Strength)