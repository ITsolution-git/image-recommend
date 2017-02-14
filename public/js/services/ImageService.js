angular.module('ImageService', []).factory('Image', ['$http', function($http) {
    return {
        // call to get all nerds
        get: function() {
            return $http.get('/api/images');
        },
        archive: function(id) {
            return $http.get('/api/archive/' + id);
        },

    }
}]);