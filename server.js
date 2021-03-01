const express = require('express')
const db = require('./db/connection')


const PORT = process.env.PORT || 3001

const app = express()



db.on('error', console.error.bind(console, 'MongoDB connection error: '))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))