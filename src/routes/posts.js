const router = require('express').Router();
const { validateToken } = require('../services/token');
const mPosts = require('../middlewares/mPosts');
const cPosts = require('../controllers/cPosts');

router.get('/posts', validateToken, cPosts.allPosts);
router.get('/posts/:id', validateToken, cPosts.findPostById);
router.post('/posts', validateToken, mPosts.verifyFields, cPosts.newPost);
router.put('/posts/:id',
  validateToken,
  mPosts.verifyFields,
  mPosts.verifyUserCreatePost,
  cPosts.updatePost);
router.delete('/posts/:id',
  validateToken,
  mPosts.verifyUserCreatePost,
  cPosts.deletePost);

module.exports = router;
