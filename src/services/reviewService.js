const { Review, User, Dom } = require('../model/models/index');
const { AppError } = require('../middlewares/errorHandler');
const { createReviewId } = require('../utils/createIndex');

// [ 리뷰 전체 조회 ]
const getAllReviews = async () => {
  try {
    const reviews = await Review.find();

    if (!reviews) return new AppError(404, '등록된 리뷰가 존재하지 않습니다!');

    return {
      statusCode: 200,
      message: '전체 리뷰 조회 성공',
      data: reviews,
    };
  } catch (error) {
    console.error(error);
    return new AppError(500, 'Internal Server Error');
  }
};

// [ 리뷰 등록 ]
/** ([유저아이디, 풋볼장번호, 작성자이름, 평점, 리뷰내용 ]) */
const addReview = async (reviews) => {
  const { user_id, dom_id, rating, comment } = reviews;

  try {
    const foundUser = await User.findOne({ user_id});
    if (!foundUser) return new AppError(404, '존재하지 않는 아이디입니다.');
    const userObjectId = foundUser._id;

    const foundDom = await Dom.findOne({ dom_id });
    if (!foundDom) return new AppError(404, '존재하지 않는 풋볼장입니다.');
    const domObjectId = foundDom._id;

    const reviewId = await createReviewId();

    const newReviewField = {
      review_id: reviewId,
      user_id: userObjectId,
      dom_id: domObjectId,
      name: foundUser.name,
      rating,
      comment,
    };

    const newReview = await Review.create(newReviewField);

    return {
      statusCode: 201,
      message: '리뷰가 등록되었습니다.',
      data: newReview,
    };
  } catch (error) {
    console.error(error);
    return new AppError(500, 'Internal Server Error');
  }
};

// [ 리뷰 수정 ]
/** ([리뷰번호, 유저아이디, 평점, 리뷰내용 ]) */
const updateReview = async (review) => {
  const { reviewId, user_id, rating, comment } = review;

  try {
    const foundReview = await Review.findOne({ review_id: reviewId });
    if (!foundReview) return new AppError(404, '존재하지 않는 리뷰입니다.');

    const foundUser = await User.findOne({ user_id });
    if (!foundUser) return new AppError(404, '존재하지 않는 아이디입니다.');
    const userObjectId = toString(foundUser._id);

    if (toString(user_id) !== userObjectId) {
      return new AppError(404, '본인이 작성한 리뷰만 수정 가능합니다.');
    }

    const updatedReviewObj = {
      rating,
      comment,
    };

    const updatedReview = await Review.findOneAndUpdate(
      { review_id: reviewId },
      { $set: updatedReviewObj },
      { new: true }
    );
    return { statusCode: 200, message: '리뷰 수정 성공', data: updatedReview };
  } catch (error) {
    console.error(error);
    return new AppError(500, 'Internal Server Error');
  }
};

// [ 리뷰 삭제 ]
const deleteReview = async (review) => {
  const { reviewId, user_id } = review;

  try {
    const foundReview = await Review.findOne({ review_id: reviewId });

    if (!foundReview) return new AppError(404, '존재하지 않는 리뷰입니다.');

    const reviewUserObjectId = foundReview.user_id.toString();

    const foundUser = await User.findOne({ user_id });

    if (!foundUser) return new AppError(404, '존재하지 않는 아이디입니다.');

    const userObjectId = foundUser._id.toString();

    if (reviewUserObjectId !== userObjectId)
      return new AppError(403, '리뷰 작성자만 삭제 가능합니다.');

    await Review.deleteOne({ review_id: reviewId });

    return { statusCode: 204, message: '리뷰 삭제 성공' };
  } catch (error) {
    console.error(error);
    return new AppError(500, 'Internal Server Error');
  }
};

module.exports = {
  getAllReviews,
  addReview,
  updateReview,
  deleteReview,
};
