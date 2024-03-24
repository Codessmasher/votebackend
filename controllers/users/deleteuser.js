import User from "../../models/user.js";

const deleteuser = async (req, res) => { 
    try {
        const deletedUser= await User.findByIdAndDelete({_id:req.params.id});

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        
        return res.status(200).json({ message: "User deleted successfully!", result: deletedUser});
    } catch (error) { 
        return res.status(500).json({ error: "Internal server error" });
    }
}

export default deleteuser;
