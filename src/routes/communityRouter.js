const { Router } = require('express');
const router = Router();
const imageUpload = require('../middlewares/multer');
const tokenValidator = require('../validator/jwt/tokenValidator');
const communityController = require('../controllers/communityController');

/* GET */
// [ 커뮤니티 게시글 페이징 쿼리 ]
router.get('/pages', tokenValidator, communityController.getPagePost);

// [ 커뮤니티 게시글 조회 ]
router.get('/', tokenValidator, communityController.getAllPosts);

//[ 커뮤니티 게시글 상세 조회 ]
router.get('/:postId', tokenValidator, communityController.getOnePost);

/* POST */
// [ 커뮤니티 게시글 등록 ]
router.post(
  '/',
  tokenValidator,
  // imageUpload.array('image', 3),
  communityController.addPost
);

// [ 커뮤니티 게시글 좋아요 ]
router.post('/like', tokenValidator, communityController.addLikePosts);

//[ 커뮤니티 게시글 댓글 등록 ]
router.post('/:postId/comment', tokenValidator, communityController.addComment);

// [ 커뮤니티 게시글 대댓글 등록]
router.post(
  '/:postId/comment/:commentId/reply',
  tokenValidator,
  communityController.addCommentReply
);

//[ 이미지 업로드 ]
router.post(
  '/uploads',
  tokenValidator,
  imageUpload.single('image'),
  communityController.uploadImage
);

/* PATCH */
// [ 커뮤니티 게시글 수정 ]
router.patch('/:postId', tokenValidator, communityController.updatePost);

//[ 커뮤니티 게시글 댓글 수정]
router.patch(
  '/:postId/comment/:commentId',
  tokenValidator,
  communityController.updateComment
);

// [ 커뮤니티 게시글 대댓글 수정]
router.patch(
  '/:postId/comment/:commentId/reply/:replyId',
  tokenValidator,
  communityController.updateCommentReply
);

/* DELETE*/
// [ 커뮤니티 게시글 삭제 ]
router.delete('/:postId', tokenValidator, communityController.deletePost);

//[ 커뮤니티 게시글 댓글 삭제 ]
router.delete(
  '/:postId/comment/:commentId',
  tokenValidator,
  communityController.deleteComment
);

// [ 커뮤니티 게시글 대댓글 삭제]
router.delete(
  '/:postId/comment/:commentId/reply/:replyId',
  tokenValidator,
  communityController.deleteCommentReply
);

module.exports = router;
