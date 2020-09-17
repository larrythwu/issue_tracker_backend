const jwt = require("jsonwebtoken");

//validate that the user is logged in and pass the id of the current user to /delete route
//only check if the token is secure
const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).json({ message: "Not logged in" });

    const verified = jwt.verify(token, process.env.JWT_privateKey);
    if (!verified)
      return res.status(401).json({ message: "Verification failed" });

    //local storage space
    res.locals.user = verified.id;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = auth;
