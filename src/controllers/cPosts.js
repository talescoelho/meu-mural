const sPosts = require('../services/sPosts');
const { StatusCodes } = require('http-status-codes');

const allPosts = async (_req, res) => {
  const posts = await sPosts.allPosts();
  if (posts.message) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(posts);
  }
  return res.status(StatusCodes.OK).json(posts);
}

const newPost = async (req, res) => {
  const { body, userId } = req;
  const post = await sPosts.newPost({ ...body, userId });
  if (post.message) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(post);
  }
  return res.status(StatusCodes.CREATED).json(post);
}

const updatePost = async (req, res) => {
  const { body, params: { id } } = req;
  const post = await sPosts.updatePost({ ...body, id });
  if (post.message) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(post);
  }
  return res.status(StatusCodes.ACCEPTED).json(post);
}

const findPostById = async (req, res) => {
  const { id } = req.params;
  const post = await sPosts.findById(id);
  if (post.message) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(post);
  }
  return res.status(StatusCodes.OK).json(post);
}

const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await sPosts.deletePost(id);
  return res.status(StatusCodes.ACCEPTED).json(post);
}

module.exports = {
  allPosts,
  newPost,
  updatePost,
  findPostById,
  deletePost,
}
