import Candidate from "../models/candidate.js";

const candidates = async (req, res) => {
    const candidate_id = req.params.id;

    try {
        if (candidate_id) {
            const candidateInfo = await Candidate.find({ _id: candidate_id });

            if (candidateInfo.length === 0) {
                return res.status(404).json({ error: "Candidate not found" });
            }

            return res.status(200).json({ response: candidateInfo });
        }else{
            const candidateInfo = await Candidate.find();

            if (candidateInfo.length === 0) {
                return res.status(404).json({ error: "Candidate not found" });
            }

            return res.status(200).json({ response: candidateInfo,total:candidateInfo.length });
        }
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

export default candidates;
