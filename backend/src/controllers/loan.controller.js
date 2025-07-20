import { Loan } from "../models/loan.model.js";

const getLoan = async (req,res)=>{
    const { fullName, email, phone, amount, purpose, income, category } = req.body;
    
    if( !fullName || !email || !phone || !amount || !purpose || !income || !category){
        return res.status(400).json({
            message: 'Required field is missing'
        })
    }
    
    const loan = await Loan.create(req.body);

    return res.status(201).json({
        message: 'Loan approved successfully',
        loan
    })
}

export { getLoan };