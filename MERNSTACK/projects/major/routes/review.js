const express = require("express");
const router = express.Router({ mergeParams: true });
const warpAsync = require("../utils/wrapAsync");
const reviewController = require("../controllers/reviews");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");

//Review Create Route:
router.post(
  "/",
  isLoggedIn,
  validateReview,
  warpAsync(reviewController.createReview)
);

//Review Delete Route:
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  warpAsync(reviewController.destroyReview)
);

module.exports = router;
