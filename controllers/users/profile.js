import User from "../../models/user.js";

const profile = async (req, res) => {  
    try {
        const userProfile = await User.find({_id:req.user.id});
        console.log(userProfile)
        if (!userProfile) {
            return res.status(404).json({ error: "User not found" });
        }
        
        return res.status(200).json({ message: "User Profile Exist", result: userProfile });
    } catch (error) { 
        return res.status(500).json({ error: "Internal server error" });
    }
}

export default profile;
