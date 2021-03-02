const Router = require('express').Router()
const controller = require('../controllers/workout')

Router.post('/balanceexercise', controller.balanceExercise )
Router.post('/strengthexercise', controller.strengthExercise )
Router.post('/enduranceexercise', controller.enduranceExercise )


module.exports = Router