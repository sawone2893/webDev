const express = require("express");
const router = express.Router();
const warpAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema } = require("../schema");
const Listing = require("../models/listings");

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//Index Route:
router.get(
  "/",
  warpAsync(async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

//New Route:
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Show Route:
router.get(
  "/:id",
  warpAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      req.flash("error", "Listing you requested does not exist!");
      res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  })
);

//Create Route
router.post(
  "/",
  validateListing,
  warpAsync(async (req, res, next) => {
    const listing = new Listing(req.body.listing);
    await listing.save();
    req.flash("success", "New Lisiting created!");
    res.redirect("/listings");
  })
);

//Edit Route:
router.get(
  "/:id/edit",
  warpAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you requested does not exist!");
      res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  })
);

//Update Route:
router.put(
  "/:id",
  validateListing,
  warpAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Updated Lisiting!");
    res.redirect(`/listings/${id}`);
  })
);

//Delete Route:
router.delete(
  "/:id",
  warpAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Lisiting deleted!");
    res.redirect("/listings");
  })
);

module.exports = router;
