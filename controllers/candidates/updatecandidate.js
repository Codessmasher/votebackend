import Candidate from "../../models/candidate.js";

const updatecandidate = async (req, res) => {
    if (req.user.role != "admin") {
        return res.status(403).json({ error: "Only admin can update candidates" });
    }
    
    try {
        const updatedCandidate = await Candidate.findByIdAndUpdate({_id:req.params.id}, req.body, { new: true });

        if (!updatedCandidate) {
            return res.status(404).json({ error: "Candidate not found" });
        }
        
        return res.status(200).json({ message: "Candidate updated successfully!", result: updatedCandidate });
    } catch (error) { 
        return res.status(500).json({ error: "Internal server error" });
    }
}

export default updatecandidate;
