import User from "../../models/user.js";

const updateuser = async (req, res) => {  
    try {
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
