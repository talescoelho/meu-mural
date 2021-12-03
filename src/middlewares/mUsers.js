const { StatusCodes } = require('http-status-codes');
const { schemaUser, schemaLogin } = require('./schema');
const sUsers = require('../services/sUsers');

const verifyFields = async (req, res, next) => {
  const { error, value } = schemaUser.validate(req.body);
  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }

  const validEmail = await sUsers.emailExists(value.email)

  if (!validEmail.message) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'email exists' })
  }

  next();
}

const verifyLogin = async (req, res, next) => {
  const { error } = schemaLogin.validate(req.body);
  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }

  next();
}

module.exports = {
  verifyFields,
  verifyLogin,
}