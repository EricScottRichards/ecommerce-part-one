app.service('mainSrvc', function($q, $http){
	

	
	this.getStuff = function(){
		var dfd = $q.defer();
		$http.get('/api/eCommerceThing')
			.then(function(response){
				console.log(response);
				dfd.resolve(response.data);
			})
		return dfd.promise;
	}

	this.postData = function(item){
		console.log(item);
		return $http({
			method: "POST",
			url: "/api/eCommerceThing",
			data: {
				name: item.name,
				description: item.desc,
				price: item.price
			}
		})
	}
})