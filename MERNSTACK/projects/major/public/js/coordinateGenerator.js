const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.getGeometry = async (locationName) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: locationName,
      limit: 1,
    })
    .send();

  return response.body.features[0].geometry;
};
