const express = require('express');
const router = express.Router();
const {register,login} = require('../controllers/userController');
const {list, show, create, update, listAll, deletePost } = require('../controllers/postController');

const { authenticateUser } = require('../middlewares/authentication');

// user
router.post('/users/register', register);
router.post('/users/login', login);
// router.get('/users/account', authenticateUser, usersController.account);

//POSTS
router.post('/post', authenticateUser, create);

router.get('/posts',authenticateUser, list)
router.get('/posts-show-all' , listAll)
router.get('/posts/:id',authenticateUser, show)
router.post('/post',authenticateUser, create)
router.put('/post/:id',authenticateUser, update)
router.delete('/post/:id',authenticateUser, deletePost)


module.exports = router;