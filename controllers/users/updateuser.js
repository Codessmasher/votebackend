import User from "../../models/user.js";
import bcrypt from "bcryptjs";
const updateuser = async (req, res) => {  
    try {
        if (req.body.password) { 
            // Update hashing the password in the user object 
            req.body.password = bcrypt.hashSync(req.body.password, 10);
        } 
        const updatedUser = await User.findByIdAndUpdate({_id:req.params.id}, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        
        return res.status(200).json({ message: "User updated successfully!", result: updatedUser });
    } catch (error) { 
        return res.status(500).json({ error: "Internal server error" });
    }
}

export default updateuser;
