const { Router } = require('express');
const router = Router();
const adminController = require('../controllers/adminController');

// [ 관리자 - 유저 정보 조회]
router.get('/:id', adminController.getAllUserInfo); // admin/:id

//[ 관리자 - 유저 로그인 정지 ]
router.patch('/ban/login', adminController.adminBanUser); // admin/login-ban

//[ 관리자 - 유저 게시물 등록 정지 ]
router.patch('/ban/community', adminController.adminBanCommunity);

//[ 관리자 - 유저 직위 변경 ]
router.patch('/role', adminController.updateUserRole); //admin/role

module.exports = router;
