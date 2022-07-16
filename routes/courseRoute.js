const express = require('express');
const courseController = require('../controllers/courseController');
const roleMiddleware = require('../middlewares/roleMiddleware')

const router = express.Router();

// http://localhost/courses
router.route('/').post(roleMiddleware(["teacther", "admin"]), courseController.createCourse);
router.route('/').get(courseController.getAllCourse);
router.route('/:slug').get(courseController.getCourse);

module.exports = router;