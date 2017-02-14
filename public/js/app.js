angular.module('app', ['ngRoute', 'appRoutes', 'MainCtrl', 'ImageCtrl','ImageService', 'angularLazyImg'])
.config(['lazyImgConfigProvider', function(lazyImgConfigProvider){
    lazyImgConfigProvider.setOptions({
      offset: 100, // how early you want to load image (default = 100)
      errorClass: 'error', // in case of loading image failure what class should be added (default = null)
      successClass: 'success', // in case of loading image success what class should be added (default = null)
      onError: function(image){}, // function fired on loading error
      onSuccess: function(image){}, // function fired on loading success
    });
}]);	