import User from "../../models/user.js";

export const signup = async (req, res) => {
    const data = req.body;
    const newUser = new User(data); 

    try {
        const user = await User.findOne({ adhaarNumber: data.adhaarNumber }); 
        if (user)return res.status(403).json({ error: "Adhaar number already exist ! Please login" });
        const result = await newUser.save();
        return res.status(201).json({ message: "User registered successfully!" , result:result }); 
    } catch (error) {  
        return res.status(404).json({ error: error });
    }
}
