angular.module('todo-app', [])

.controller('mainController', function($scope, $http) {
	$scope.formData = {};
	$scope.todoData = [];

	// llamamos a todos los items
	$http.get('/api/v1/items')
		.success(function(data) {
			$scope.todoData = data;
			console.log(data);
		})
		.error(function(error) {
			console.log("Error: " + error);
		});

	// Creamos variable dentro del scope
	$scope.createTodo = function() {
		$http.post('/api/v1/items', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.todoData = data.data;
				console.log(data);
			})
			.error(function(err) {
				console.log("error: " + error);
			});
	};

	// Ponemos el check al todo
	$scope.actualizaTodo = function(todoId) {
		$http.put('/api/v1/items/' + todoId)
			.success(function(data) {
				console.log("yey!");
			})
			.error(function(err) {
				console.log("error: " + error);
			});
	};

	// Borra todo
	$scope.borraTodo = function(todoId) {
		$http.delete('/api/v1/items/' + todoId)
			.success(function(data) {
				console.log("yey!");
			})
			.error(function(err) {
				console.log("error: " + error);
			});
	};

})
