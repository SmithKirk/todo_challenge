(function () {
  'use strict';

angular.module('todoList.controller', [])
.controller('todoListController', ['$scope', function($scope){

  $scope.newTask = "";

  $scope.taskList = [
    {description: "Go for a run", done: false},
    {description: "Goto the bank", done: false},
    {description: "Book flight", done: false}
  ];

  $scope.addTask = function() {
    $scope.taskList.push({description: $scope.newTask, done: false})
    $scope.newTask = "";
  };

  $scope.deleteTask = function(index) {
    $scope.taskList.splice(index, 1)
  };

}]);



}());
