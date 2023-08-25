const { Schema } = require('mongoose');

// [ 커뮤니티 게시글 스키마 ]
const PostSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    nick_name: {
      type: String,
      ref: 'User.nick_name',
      required: true,
    },
    profile: {
      type: String,
      ref: 'User.profile',
      required: true,
    },
    post_id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: false,
    },
    subject: {
      type: String,
      required: false,
    },
    hashTags: [
      {
        type: String,
        required: false,
      },
    ],
    notice: {
      type: String,
      enum: ['공지사항', '일반 게시글'],
      default: '일반 게시글',
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    like: [
      {
        _id: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
        user_id: {
          type: String,
          ref: 'User.user_id',
        },
      },
    ],
  },
  { timestamps: true }
);

// [ 커뮤니티 댓글 스키마 ]
const CommentSchema = new Schema(
  {
    comment_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    userId: {
      type: String,
      ref: 'User.user_id',
      required: true,
    },
    nick_name: {
      type: String,
      ref: 'User.nick_name',
      required: true,
    },
    profile: {
      type: String,
      ref: 'User.profile',
      required: true,
    },
    post_id: {
      type: String,
      ref: 'Post.post_id',
      required: true,
    },
    content: { type: String, required: true },
    image: {
      type: String,
      required: false,
    },
    reply: [
      {
        reply_id: {
          type: String,
          ref: 'CommentReply.reply_id',
        },
        user_id: {
          type: Schema.Types.ObjectId,
          ref: 'CommentReply.user_id',
        },
        userId: {
          type: String,
          ref: 'CommentReply.userId',
        },
        nick_name: {
          type: String,
          ref: 'CommentReply.nick_name',
        },
        profile: {
          type: String,
          ref: 'CommentReply.profile',
        },
        comment_id: {
          type: String,
          ref: 'CommentReply.comment_id',
        },
        image: {
          type: String,
          ref: 'CommentReply.image',
        },
        content: {
          type: String,
          ref: 'CommentReply.content',
        },
        createdAt: {
          type: String,
          ref: 'CommentReply.createdAt',
        },
        updatedAt: {
          type: String,
          ref: 'CommentReply.updatedAt',
        },
      },
    ],
  },
  { timestamps: true }
);

const CommentReplySchema = new Schema(
  {
    reply_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    userId: {
      type: String,
      ref: 'User.user_id',
      required: true,
    },
    nick_name: {
      type: String,
      ref: 'User.nick_name',
      required: true,
    },
    profile: {
      type: String,
      ref: 'User.profile',
      required: true,
    },
    comment_id: {
      type: String,
      ref: 'Comment.comment_id',
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = {
  PostSchema,
  CommentSchema,
  CommentReplySchema,
};
