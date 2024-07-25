const express=require('express');
const router =express.Router();
const userController = require('../controllers/userController');
const verifyJWT=require("../middleware/verifyJWT");


router.post('/users/login',userController.userLogin);

router.post('/users',userController.registerUser);
router.get('/user',verifyJWT,userController.getCurrentUser);
router.put('/user',verifyJWT,userController.updateUser);

module.exports=router;