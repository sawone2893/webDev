const express = require("express");
const router = express.Router();
const warpAsync = require("../utils/wrapAsync");
const { isLoggedIn, validateListing, isOwner } = require("../middleware");
const listingController = require("../controllers/listings");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });

//Index, Create Route:
router
  .route("/")
  .get(warpAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    warpAsync(listingController.createListing)
  );

//New Route:
router.get("/new", isLoggedIn, listingController.renderNewFrom);

//Show, Update, Delete Routes:
router
  .route("/:id")
  .get(isLoggedIn, warpAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    warpAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, warpAsync(listingController.destroyListing));

//Edit Route:
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  warpAsync(listingController.renderEditFrom)
);

module.exports = router;
