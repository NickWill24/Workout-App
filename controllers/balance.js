const Balance = require('../models/balance')



const createBalance = async (req, res) => {
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

const getBalance = async (req, res) =>{
    try{
        const { id } = req.params; 
        const get = await Balance.findById(id)
        if (get){
            return res.status(200).send("Find Balance exercise");
        }
    } catch (error){
        throw new Error("Balance exercise not found");
        
    }
}


const deleteBalance = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Balance.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Balance exercise deleted");
        }
        
    } catch (error) {
        throw new Error("Balance exercise not found");
    }
}


module.exports= {
    createBalance,
    deleteBalance,
    getBalance
}