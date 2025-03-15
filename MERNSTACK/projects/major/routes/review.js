const express = require("express");
const router = express.Router({mergeParams:true});
const warpAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const {reviewSchema } = require("../schema");
const Listing = require("../models/listings");
const Review = require("../models/review");

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};


//Review Create Route:
router.post(
    "/",
    validateReview,
    warpAsync(async (req, res) => {
      const listing = await Listing.findById(req.params.id);
      const newReview = new Review(req.body.review);
      listing.reviews.push(newReview);
      await newReview.save();
      await listing.save();
      res.redirect(`/listings/${listing._id}`);
    })
  );
  
  //Review Delete Route:
  router.delete(
    "/:reviewId",
    warpAsync(async (req, res) => {
      let { id, reviewId } = req.params;
      await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
      await Review.findByIdAndDelete(reviewId);
      res.redirect(`/listings/${id}`);
    })
  );

  module.exports=router;