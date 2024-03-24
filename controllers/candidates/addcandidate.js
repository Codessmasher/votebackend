import Candidate from "../../models/candidate.js"; 

const addcandidate = async (req, res) => {
    if (req.user.role != "admin") {  
        return res.status(403).json({ error: "Only admin can add candidates"});
    }
    const data = req.body;
    const newCandidate = new Candidate(data);

    try {
        const candidate = await Candidate.findOne({ party: data.party }); 
        if (candidate)return res.status(403).json({ error: "Candidate already exist !" });
        const result = await newCandidate.save();
        return res.status(201).json({ message: "Candidate registered successfully!" , result:result }); 
    } catch (error) {  
        return res.status(404).json({ error: error });
    }
}

export default addcandidate;