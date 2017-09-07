/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  Listings.findOne({
    name: "Library West"
  })
  .then((listing) => console.log(listing))
  .catch((err) => console.log("Find error: '" err));
};

var removeCable = function() {
  Listings.findOne({
    code: "CABL"
  })
  .then((listing) => Listing.remove(listing))
  .catch((err) => console.log("Remove error: ", err));;
};

var updatePhelpsLab = function() {
  Listing.findOneAndUpdate(
    {name: "Phelps Laboratory"}, 
    {$set:{ address: "<New address for Phelps Lab>" } , 
    {new: true}, 
    (err, listing) => 
    {if (err){
      console.log("Update error: ", err);
      console.log(listing);
    });
  });
};

var retrieveAllListings = function() {
   Listing.find({})
  .then((listings) => console.log(listings))
  .catch((err) => console.log("Find all error", err));
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
