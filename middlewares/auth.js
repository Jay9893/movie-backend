const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if(token) {
        const decodedToken = jwt.verify(token, process.env.JWTPRIVATEKEY);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
          return res.status(401).json({ error: "Invalid user ID" });
        } else {
          next();
        }
    } else {
        return res.status(401).json({
            error: 'Unauthenticated!'
        });    
    }
  } catch (err) {
    return res.status(401).json({
      error: 'Invalid request!'
    });
  }
};
module.exports = authentication;