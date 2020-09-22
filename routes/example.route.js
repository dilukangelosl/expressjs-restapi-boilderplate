const express = require('express');
const router = express.Router();
const controller = require('../controllers/example.controller');

const JoiMiddleware = require('../middlewares/joi.middleware');
const validationSchema = require('../validationSchemas/example.schema');
const dilukMiddleware = require('../middlewares/example.middleware');
const authMiddleware = require('../middlewares/authentication.middleware');
//create routes

router.get('/', dilukMiddleware.checkLoginToken, controller.findAll)

router.post('/',JoiMiddleware.validateBody(validationSchema.createSchema),controller.add)


router.put('/',JoiMiddleware.validateBody(validationSchema.updateSchema), controller.update )


router.delete('/', controller.delete )


router.get('/myprofile', authMiddleware.isAuthenticated,  (req,res,next) => {
   return res.send("Welcome " +req.jwt.email);
})


module.exports = router;