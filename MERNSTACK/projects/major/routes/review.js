const express = require("express");
const router = express.Router({ mergeParams: true });
const warpAsync = require("../utils/wrapAsync");
const Listing = require("../models/listings");
const Review = require("../models/review");
const { validateReview,isLoggedIn,isReviewAuthor } = require("../middleware");

//Review Create Route:
router.post(
  "/",
  isLoggedIn,
  validateReview,
  warpAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review);
    newReview.author=req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New review created!");
    res.redirect(`/listings/${listing._id}`);
  })
);

//Review Delete Route:
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  warpAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted!");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
