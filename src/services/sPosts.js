const { Post } = require('../models');

function errorMessage(message) {
  return { message }
}

const allPosts = async () => {
  try {
    const validEmail = await Post.findAll();
    return validEmail;
  } catch (error) {
    console.log(error.message);
    return errorMessage('Deu ruim ae parça');
  }
}

const newPost = async (data) => {
  try {
    const validEmail = await Post.create(data);
    return validEmail;
  } catch (error) {
    console.log(error.message);
    return errorMessage('Deu ruim ae parça');
  }
}

const findById = async (id) => {
  try {
    const post = await Post.findOne({ where: { id } });
    return post;
  } catch (error) {
    console.log(error.message);
    return errorMessage('Deu ruim ae parça');
  }
}

const updatePost = async (data) => {
  try {
    await Post.update(data, { where: { id: data.id } });
    return findById(data.id);
  } catch (error) {
    console.log(error.message);
    return errorMessage('Deu ruim ae parça');
  }
}

const deletePost = async (id) => {
  try {
    await Post.destroy({ where: { id } });
    return { message: 'post deletado com sucesso' };
  } catch (error) {
    console.log(error.message);
    return errorMessage('Deu ruim ae parça');
  }
}

module.exports = {
  allPosts,
  newPost,
  findById,
  updatePost,
  deletePost,
}
