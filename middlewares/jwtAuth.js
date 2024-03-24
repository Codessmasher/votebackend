import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
 
const jwtAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) return res.status(401).json({ error: "Unauthorized" });

    const token = authorization.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Invalid token" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET); 
        req.user = decoded;
        next(); // Call next middleware in chain
    } catch (error) {
        // Handle JWT verification errors separately
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ error: "Invalid token" });
        } else { 
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}

const generatetoken = (payload) => {
    return jwt.sign(payload, JWT_SECRET); 
}

export { jwtAuth, generatetoken };
