const Strength = require('../models/strength')

const createStrength = async (req, res) => {
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


const getStrength = async (req, res) =>{
    try{
        const { id } = req.params; 
        const get = await Strength.findById(id)
        if (get){
            return res.status(200).send("Find Strength exercise");
        }
    } catch (error){
        throw new Error("Strength exercise not found");
        
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

module.exports={
    createStrength,
    getStrength,
    deleteStrength
}