const jwt = require('jsonwebtoken');
const model = require('../models/user');
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT;

async function createSession(req, res) {
  try {
    const results = await model.selectByName(req.body.name);
    const user = results?.[0];
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const checkPassword = await bcrypt.compare(req.body.password, user.password);
    if (!checkPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const payload = { id: user.id, name: user.name };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
    res.cookie('access_token', token, { maxAge: 365 * 24 * 60 * 60 * 1000, httpOnly: true });
    res.json({ message: 'token', token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

function getSession(req, res) {
  if (!req.user) {
    return res.status(403).json({ error: 'Invalid token' });
  }
  const { password, ...userSafe } = req.user;
  res.json(userSafe);
}

module.exports = { createSession, getSession };
