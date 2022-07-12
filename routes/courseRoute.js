const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseController.createCourse); // http://localhost/courses
router.route('/').get(courseController.getAllCourse);

module.exports = router;