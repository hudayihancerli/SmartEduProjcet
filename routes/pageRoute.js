const express = require('express');
const pageController = require('../controllers/pageController');
const redirectMiddleware = require('../middlewares/redirectMiddleware')

const router = express.Router();

router.route('/').get(pageController.getIndexPage);// http://localhost/
router.route('/about').get(pageController.getAboutPage);// http://localhost/about
router.route('/register').get(redirectMiddleware, pageController.getRegisterPage);// http://localhost/register
router.route('/login').get(redirectMiddleware, pageController.getLoginPage);// http://localhost/login
router.route('/contact').get(pageController.getContactPage);// http://localhost/about
router.route('/contact').post(pageController.sendEmail);// http://localhost/about

module.exports = router;     