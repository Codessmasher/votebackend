import User from "../../models/user.js";
import {generatetoken} from '../../middlewares/jwtAuth.js';

export const signin = async (req,res) => {
    const {adhaarNumber,password} = req.body; 
 
    try {
        const user = await User.findOne({ adhaarNumber: adhaarNumber}); 
        if (!user) return res.status(404).json({ error: "Adhaar number not registered"}); 
        const isMatched=user.comparePassword(password); 
        if (!isMatched) return res.status(404).json({ error: "Wrong password"}); 
        const payload={ 
            "id":user.id,
            "role":user.role
        } 
        const token=generatetoken(payload);
        return res.status(200).json({ message: "User loggedin successfully!",token:token}); 
    } catch (error) {  
        return res.status(404).json({ error: `Failed to login user ${error}`});
    }
}
