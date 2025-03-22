const express = require("express");
const router = express.Router();
const warpAsync = require("../utils/wrapAsync");
const Listing = require("../models/listings");
const { isLoggedIn, validateListing, isOwner } = require("../middleware");

//Index Route:
router.get(
  "/",
  warpAsync(async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

//New Route:
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});

//Show Route:
router.get(
  "/:id",
  isLoggedIn,
  warpAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({ path: "reviews", populate: { path: "author" } })
      .populate("owner");
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
  isLoggedIn,
  validateListing,
  warpAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Lisiting created!");
    res.redirect("/listings");
  })
);

//Edit Route:
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
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
  isLoggedIn,
  isOwner,
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
  isLoggedIn,
  isOwner,
  warpAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Lisiting deleted!");
    res.redirect("/listings");
  })
);

module.exports = router;
