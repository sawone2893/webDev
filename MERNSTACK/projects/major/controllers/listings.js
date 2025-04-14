const Listing = require("../models/listings");
const { getGeometry } = require("../public/js/coordinateGenerator");

module.exports.index = async (req, res) => {
  let category = req.query.category;
  let allListings;
  if (category === "All" || category === undefined) {
    allListings = await Listing.find({});
  } else {
    allListings = await Listing.find({ category: category });
    if (!allListings.length > 0) {
      req.flash("error", `Listing for category: ${category} does not exist!`);
      //res.redirect("/listings");
    }
  }
  let destination = req.query.destination;
  if (destination) {
    allListings = await Listing.find({ country: destination });
    if (!allListings.length > 0) {
      req.flash("error", `Listing for destination: ${destination} does not exist!`);
      //res.redirect("/listings");
    }
  }
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewFrom = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.image = { url, filename };
  newListing.owner = req.user._id;
  newListing.geometry = await getGeometry(req.body.listing.location);
  await newListing.save();
  req.flash("success", "New Lisiting created!");
  res.redirect("/listings");
};

module.exports.renderEditFrom = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
  }
  listing.geometry = await getGeometry(listing.location);
  listing.save();
  req.flash("success", "Updated Lisiting!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  req.flash("success", "Lisiting deleted!");
  res.redirect("/listings");
};
