angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.addListing = function(newListing) {
      var copy = angular.copy(newListing);
      copy.code = copy.code.toUpperCase();
      copy.name = copy.name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      Listings.push(copy);
    };

    $scope.deleteListing = function(listing) {
      Listings.findIndex((currentListing, index) => {
        if(currentListing === listing){
          Listings.splice(index, 1);
        }
      });
    };

    $scope.showDetails = function(listing) {
      $scope.detailedInfo = listing;
    };

  }
]);