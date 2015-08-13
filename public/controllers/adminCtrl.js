app.controller('adminCtrl', function($scope, mainSrvc){
	// $scope.test = "yerpinstein"
	// var getStuff = function(){
	// 	mainSrvc.getStuff().then(function(response){
	// 		console.log(response)
	// 		$scope.allStuff = response
	// 	})
	// }

	// getStuff();

	$scope.allStuff   = mainSrvc.getStuff();

	$scope.postData   = function(){
		console.log($scope.item);
		mainSrvc.postData($scope.item)
	}

	$scope.deleteData = function(){
		mainSrvc.deleteData()
	}

	$scope.updateData = function(){
		
	}

	// $scope.postData = function(){
		
	// }
})