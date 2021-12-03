const sUser = require('../services/sUsers');
const { StatusCodes } = require('http-status-codes');

const createUser = async (req, res) => {
  const token = await sUser.createUser(req.body);
  if (token.message) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(token);
  }
  return res.status(StatusCodes.OK).json({ token });
}

const loginUser = async (req, res) => {
  const token = await sUser.loginUser(req.body);
  if (token.message) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(token);
  }
  return res.status(StatusCodes.OK).json({ token });
}

module.exports = {
  createUser,
  loginUser,
}