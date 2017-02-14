angular.module('MainCtrl', []).controller('MainController', ['$scope', 'Image', function($scope, Image) {

    $scope.tagline = 'To the moon and back!';

    $scope.images = '';
    $scope.showArchive = false;


    Image.get().then(function(images) {
        console.log(images);
        $scope.images = images.data;
    });

    $scope.showArchiveClicked = function(){
    	$scope.showArchive = !$scope.showArchive;
    }

    $scope.deleteImg = function(id){
    	Image.archive(id).then(function(images) {
	        $scope.images = images.data;
	    });
    }

    $scope.filterImg = function(){
    	var filtered = [];
    	for (var i = 0; i < $scope.images.length; i++) {
    		if($scope.images[i].status == 'archived')
    			$scope.showArchive ? filtered.push($scope.images[i]) : '';
    		else
    			filtered.push($scope.images[i]);
    	}
    	return filtered;
    }
}]);