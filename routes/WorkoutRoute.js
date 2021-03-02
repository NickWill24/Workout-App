const Router = require('express').Router()
const balance = require('../controllers/balance')
const endurance = require('../controllers/endurance')
const strength = require('../controllers/strength')

Router.get('/getBalance', balance.getBalance)
Router.get('/getStrength', strength.getStrength)
Router.get('/getEndurance', endurance.getEndurance)



Router.post('/createBalance', balance.createBalance)
Router.post('/createStrength', strength.createStrength)
Router.post('/createEndurance', endurance.createEndurance)


Router.delete('/deleteBalance', balance.deleteBalance)
Router.delete('/deleteStrength', strength.deleteStrength)
Router.delete('/deleteEndurance', endurance.deleteEndurance)


module.exports = Router