angular.module('todo-app', [])

.controller('mainController', function($scope, $http) {
	$scope.formData = {};
	$scope.todoData = {};

	// llamamos a todos los items
	$http.get('/api/v1/items')
		.success(function(data) {
			$scope.todoData = data;
			console.log(data);
		})
		.error(function(error) {
			console.log("Error: " + error);
		});
})
