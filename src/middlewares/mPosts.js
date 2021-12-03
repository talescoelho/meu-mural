const { StatusCodes } = require('http-status-codes');
const { schemaPost } = require('./schema');
const sPosts = require('../services/sPosts');

const verifyFields = async (req, res, next) => {
  const { error } = schemaPost.validate(req.body);
  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
  next();
}

const verifyUserCreatePost = async (req, res, next) => {
  const { params: { id }, userId } = req;
  const postById = await sPosts.findById(Number(id));
  if (!postById) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Post não existe' });
  }
  if (userId !== postById.dataValues.userId) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'não autorizado' });
  }

  next();
}

module.exports = {
  verifyFields,
  verifyUserCreatePost,
}