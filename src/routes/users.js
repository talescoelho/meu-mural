const router = require('express').Router();
const mUsers = require('../middlewares/mUsers');
const cUsers = require('../controllers/cUsers');

router.post('/user/register', mUsers.verifyFields, cUsers.createUser);
router.delete('/user/delete', mUsers.verifyLogin, cUsers.loginUser);

module.exports = router;
