const Router = require('express').Router()
const controller = require('../controllers/workout')


Router.get('/balanceexercise', controller.balanceExercise )
Router.get('/strengthexercise', controller.strengthExercise )
Router.get('/enduranceexercise', controller.enduranceExercise )



Router.post('/balanceexercise', controller.balanceExercise )
Router.post('/strengthexercise', controller.strengthExercise )
Router.post('/enduranceexercise', controller.enduranceExercise )


module.exports = Router