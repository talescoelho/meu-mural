const { User } = require('../models');
const { createToken } = require('./token');
const bcrypt = require('bcrypt');

function errorMessage(message) {
  return { message }
}

const emailExists = async (email) => {
  const validEmail = await User.findOne({ where: { email } });
  if (!validEmail) {
    return errorMessage('email do not exists')
  }
  return validEmail;
}

const createHashPassword = async (pass) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(pass, salt);
}

const validPassword = async (pass, userPass) => {
  return bcrypt.compare(pass, userPass);
}

const createUser = async (userData) => {
  try {
    const { password, ...data } = userData
    const hashPassword = await createHashPassword(password)
    const { dataValues } = await User.create({ ...data, password: hashPassword });
    const token = createToken(dataValues);
    console.log(token)
    return token;
  } catch (error) {
    console.log(error.message);
    return errorMessage('Deu ruim ae parça');
  }
}

const loginUser = async ({ email, password }) => {
  try {
    const validEmail = await emailExists(email);
    if (validEmail.message) {
      return errorMessage('email ou senha inválidos');
    }
    if (await validPassword(password, validEmail.dataValues.password)) {
      const token = createToken(validEmail);
      return token;
    }
    return errorMessage('email ou senha inválidos');
  } catch (error) {
    console.log(error);
    return errorMessage('Deu ruim ae parça');
  }
}

module.exports = {
  emailExists,
  createUser,
  loginUser,
}
