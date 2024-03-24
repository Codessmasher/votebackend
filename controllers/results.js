import Candidate from "../models/candidate.js";

const results = async (req, res) => {

    try {
        const candidatesInfo = await Candidate.find().sort({ voteCount: -1 }); //send candidates list on descending order of votes

        if (candidatesInfo.length === 0) {
            return res.status(404).json({ error: "Candidates not found" });
        }

        return res.status(200).json({ response: candidatesInfo,winner:candidatesInfo[0].party});

    } catch (error) {
        return res.status(500).json({ error: `Internal server error ${error}`});
    }
};

export default results;
