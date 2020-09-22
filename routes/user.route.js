const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

const JoiMiddleware = require('../middlewares/joi.middleware');
const validationSchema = require('../validationSchemas/user.schema');

//create routes

router.post('/register', JoiMiddleware.validateBody(validationSchema.createSchema), controller.resgister);
router.post('/login', JoiMiddleware.validateBody(validationSchema.loginSchema), controller.login)


module.exports = router;