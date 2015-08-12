app.service('mainSrvc', function($q, $http){
	var dfd = $q.defer();
	this.getStuff = function(){
		$http.get('/api/eCommerceThing')
			.then(function(response){
				console.log(response);
				dfd.resolve(response.data);
			})
		return dfd.promise;
	}
})