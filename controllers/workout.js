const Balance = require('../models/balance')
const Strength = require('../models/strength')
const Endurance = require('../models/endurance')
const balance = require('../models/balance')


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

const updateBalance = async (req, res) => {
    try {
        const { id } = req.params;
        await Balance.findByIdAndUpdate(id, req.body, { new: true }, (err, balance) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!balance) {
                res.status(500).send('Balance exercise not found!');
            }
            return res.status(200).json(balance);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const deleteBalance = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Balance.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Balance exerise deleted");
        }
        throw new Error("Balance exercise not found");
    } catch (error) {
        return res.status(500).send(error.message);
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

const updateStrength = async (req, res) => {
    try {
        const { id } = req.params;
        await Strength.findByIdAndUpdate(id, req.body, { new: true }, (err, strength) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!Strength) {
                res.status(500).send('Strength exercise not found!');
            }
            return res.status(200).json(strength);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const deleteStrength = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Strength.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Strength exercise deleted");
        }
        throw new Error("Sterength exercise not found");
    } catch (error) {
        return res.status(500).send(error.message);
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

const updateEndurance = async (req, res) => {
    try {
        const { id } = req.params;
        await Endurance.findByIdAndUpdate(id, req.body, { new: true }, (err, endurance) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!plant) {
                res.status(500).send('Endurance exercise not found!');
            }
            return res.status(200).json(endurance);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteEndurance = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Endurance.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Endurance exercise deleted");
        }
        throw new Error("Endurance exercise not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = { 
    balanceExercise, 
    strengthExercise, 
    enduranceExercise, 
    deleteBalance, 
    deleteStrength, 
    deleteEndurance,
updateBalance, 
updateStrength, 
updateEndurance}