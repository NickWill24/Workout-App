const Balance = require('../models/balance')
const Strength = require('../models/strength')
const Endurance = require('../models/endurance')


const balanceExercise = async (req, res) => {
    try {
    const balance = await new Balance (req.body)
    await balance.save()
    return res.status(201).json({
        balance
    })
    } catch (error) {
    res.json(error)
    }
}

const strengthExercise = async (req, res) => {
    try {
    const strength = await new Strength(req.body)
    await strength.save()
    return res.status(201).json({
        strength
    })
    } catch (error) {
    res.json(error)
    }
}

const enduranceExercise = async (req, res) => {
    try {
    const endurance = await new Endurance(req.body)
    await endurance.save()
    return res.status(201).json({
        endurance
    })
    } catch (error) {
    res.json(error)
    }
}

module.exports = { balanceExercise, strengthExercise, enduranceExercise }