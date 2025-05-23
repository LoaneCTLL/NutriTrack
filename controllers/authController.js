const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = generateToken;