import Candidate from "../../models/candidate.js";

const deletecandidate = async (req, res) => {
    if (req.user.role != "admin") {
        return res.status(403).json({ error: "Only admin can delete candidates" });
    }
    
    try {
        const deletedCandidate = await Candidate.findByIdAndDelete({_id:req.params.id});

        if (!deletedCandidate) {
            return res.status(404).json({ error: "Candidate not found" });
        }
        
        return res.status(200).json({ message: "Candidate deleted successfully!", result: deletedCandidate });
    } catch (error) { 
        return res.status(500).json({ error: "Internal server error" });
    }
}

export default deletecandidate;
