const express = require('express');
const  { body } = require('express-validator')
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware')
const User = require('../model/User')

const router = express.Router();

router.route('/signup').post(
    [
        body('name').not().isEmpty().withMessage('Please Enter Your Name'),
      
        body('email').isEmail().withMessage('Please Enter valid email')
        .custom((userEmail) => {
            return User.findOne({email:userEmail}).then(user => {
                if(user){
                    return Promise.reject('Email is alreay exists!')
                }
            })
        }),

      
        body('password').not().isEmpty().withMessage('Please Enter a password')
    ],

    authController.createUser); //http://localhost:3000/users/signup

router.route('/login').post(authController.loginUser); //http://localhost:3000/users/login
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage); //http://localhost:3000/users/dashboard
router.route('/:id').delete(authController.deleteUser);


module.exports = router;