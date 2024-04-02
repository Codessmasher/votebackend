import User from "../../models/user.js";
import bcrypt from "bcryptjs";

const updateuser = async (req, res) => {  
    try {
        // Retrieve the user by ID
        const user = await User.findById(req.params.id);

        // Check if the user exists
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check if the password needs to be updated
        if (req.body.password) {
            // Hash the new password
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            // Update the password in the user object
            user.password = hashedPassword;
        } 

        // Save the updated user
        const updatedUser = await user.save();

        // Return the updated user
        return res.status(200).json({ message: "User updated successfully!", result: updatedUser });
    } catch (error) { 
        return res.status(500).json({ error: "Internal server error" });
    }
}

export default updateuser;
