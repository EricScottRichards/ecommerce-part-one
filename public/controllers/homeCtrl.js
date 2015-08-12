app.controller('homeCtrl', function($scope, mainSrvc){
	$scope.test = "oh boy oh boy";

	var getStuff = function(){
		mainSrvc.getStuff().then(function(response){
			console.log(response)
			$scope.allStuff = response
		})
	}

	getStuff();

	// $scope.allStuff = mainSrvc.getStuff()
	// .then(function(response){
	// 	$scope.allStuff = response;
	// })
	console.log($scope.allStuff)

})