const Endurance = require('../models/endurance')

const createEndurance= async (req, res) => {
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

const getEnduranceById = async (req, res) =>{
    try{
        const { id } = req.params; 
        const get = await Endurance.findById(id)
        if (get){
            return res.status(200).json({get});
        }
    } catch (error){
        throw new Error("Endurance exercise not found");
        
    }
}


const getEndurance = async (req, res) =>{
    try{
        const endurances = await Endurance.find()
        return res.status(200).send({ endurances });
    } catch (error){
        throw new Error("Endurance exercise not found");
        
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

module.exports= {
    createEndurance, 
    deleteEndurance,
    getEndurance,
    getEnduranceById
}