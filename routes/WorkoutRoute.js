const Router = require('express').Router()
const balance = require('../controllers/balance')
const endurance = require('../controllers/endurance')
const strength = require('../controllers/strength')

Router.get('/getBalance', balance.getBalance)
Router.get('/getBalance/:id', balance.getBalanceById)

Router.get('/getStrength', strength.getStrength)
Router.get('/getStrength/:id', strength.getStrengthById)

Router.get('/getEndurance', endurance.getEndurance)
Router.get('/getEndurance/:id', endurance.getEnduranceById)



Router.post('/createBalance', balance.createBalance)
Router.post('/createStrength', strength.createStrength)
Router.post('/createEndurance', endurance.createEndurance)


Router.delete('/deleteBalance/:id', balance.deleteBalance)
Router.delete('/deleteStrength/:id', strength.deleteStrength)
Router.delete('/deleteEndurance/:id', endurance.deleteEndurance)


module.exports = Router