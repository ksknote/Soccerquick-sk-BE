const Joi = require('joi');

//[ 커뮤니티 게시글 등록 ]
const addPostSchema = Joi.object({
  userId: Joi.string().label('아이디').required(),
  title: Joi.string().label('제목').required(),
  description: Joi.string().label('본문').required(),
  notice: Joi.string()
    .label('공지사항')
    .pattern(/^(공지사항|일반 게시글)$/)
    .required(),
});

//[ (유저, 괸리자) 커뮤니티 게시글 수정 ]
const updatePostSchema = Joi.object({
  postId: Joi.string().label('게시글번호').required(),
  userId: Joi.string().label('아이디').required(),
  title: Joi.string().label('제목').required(),
  description: Joi.string().label('본문').required(),
  notice: Joi.string()
    .label('공지사항')
    .pattern(/^(공지사항|일반 게시글)$/)
    .required(),
});

//[ 게시글 삭제 ]
const deletePostSchema = Joi.object({
  postId: Joi.string().label('게시글번호').required(),
  userId: Joi.string().label('아이디').required(),
});

module.exports = { addPostSchema, updatePostSchema, deletePostSchema };
