const jwt = require("jsonwebtoken");

const authenticatetoken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
        return res.status(401).json({ message: "Token not found" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token expired. Please sign in again." });
        }

        req.user = user;
        next();
    });
};

module.exports = { authenticatetoken };
