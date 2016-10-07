angular.module("myDiagramm", ["chart.js"])
.controller("LineCtrl", function ($scope, $http) {

  $scope.labels = ["HTML", "CSS", "JavaScript", "Jquery", "Drink water", "Listen music", "Dancing", "Sleep", "Drinking alcohol", "AngularJs", "GYM"];
  $scope.series = ['percent from jedi'];
  $scope.data = [
    82, 90, 56, 45, 100, 90, 45, 80, 1, 10, 100
  ];

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.onHover = function (points) {
    console.log(points)
  };

  $scope.datasetOverride = { yAxisID: 'y-axis-1' };
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
      ]
    }
  };
});