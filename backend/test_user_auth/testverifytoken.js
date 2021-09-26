//Test Verify Token --> when User Logs In will check tokens.
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    //Get the AUTH_TOKEN from the request header.
    const authtoken = req.header("AUTH_TOKEN");
    //If there is no AUTH_TOKEN, reject the access request.
    if (!authtoken) return res.status(401).send("Access Denied");
    try {
        //Verify the AUTH_TOKEN in the header, using the secret.
        const verifiedtoken = jwt.verify(authtoken, "S0m3R@1d0M6aR8AgE789abc");
        req.user = verifiedtoken;
        //(req.user);
        next();
    } catch (err) {
        res.status(400).send("Invalid Token");
    }
};
