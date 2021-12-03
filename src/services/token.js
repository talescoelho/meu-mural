require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const createToken = ({ id, name }) => jwt.sign({ id, name }, process.env.JWT_SECRET);

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'usuário não autorizado' })
  }
  jwt.verify(authorization, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      console.log(error.message);
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'usuário não autorizado' })
    }
    req.userId = decoded.id;
    next()
  });
}

module.exports = {
  createToken,
  validateToken,
}
