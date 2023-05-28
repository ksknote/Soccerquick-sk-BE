const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController');

/* GET */

/* POST */

//[ 회원가입 ]
router.post('/signup', userController.signUp);

// [ 로그인 ]
router.post('/login', userController.logIn);

/* PATCH */

//[ 회원정보 수정 ]
router.patch('/my/update', userController.updateUserInfo);

//[ 관리자 - 유저 로그인 정지 ]
router.patch('/admin/ban', userController.adminBanUser);

/* DELETE */
router.delete('/my/delete', userController.deleteUserInfo);

module.exports = router;
