import Candidate from "../models/candidate.js";
import User from "../models/user.js";

const vote = async (req, res) => {
    const candidate_id = req.params.id;
    const user_id = req.user.id;  
    try {
        const user=await User.findOne({_id:user_id}); 
        if(user.isVoted) return res.status(404).json({ error: "You have voted already" }); 
        // Find the candidate by ID and update the votes array
        const candidateInfo = await Candidate.findByIdAndUpdate(
            candidate_id,
            { 
                $push: {
                    votes: { user: user_id }
                },
                $inc: { voteCount: 1 } // Increment voteCount by 1
            },
            { new: true } // Return the updated document
        );

        if (!candidateInfo) {
            return res.status(404).json({ error: "Candidate not found" });
        }
        user.setVoted();
        return res.status(200).json({ response: candidateInfo });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

export default vote;
