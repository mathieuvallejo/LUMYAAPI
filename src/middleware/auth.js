const jwt = require('jsonwebtoken');
const model = require('../models/user');

const JWT_SECRET = process.env.JWT;

async function authByToken(req, res, next) {
  try {
    const token = req.cookies?.access_token;
    if (!token) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await model.selectById(decoded.id);
    if (!user) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
}

module.exports = { authByToken };
