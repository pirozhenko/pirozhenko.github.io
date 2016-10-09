angular.module("myDiagramm", ["chart.js"])
.controller("LineCtrl", function ($scope, $http) {

  $scope.labels = ['Yura', 'Helga', 'Serg', 'Myke', 'Alex', 'Nyk', 'Arsen'];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [25, 22, 33, 10, 30, 50, 60],
    [10, 33, 80, 90, 100, 105, 120]
  ];
  $scope.regexp = /\d+/g;
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
 	$scope.showHide = false;
 	$scope.show = function() {
  	$scope.showHide = !$scope.showHide;
  };


  // var config = {
  //       headers : {
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
  //       }
  //     };
  // $http.get('http://testtask.callway.com.ua/api/chart')
  // $http.get('../../diagrams.json')
  //   .success(function(res) {
  //     res.forEach(function(item) {
  //       $scope.data[0].push(item.X);
  //       $scope.labels.push(item.Y);
  //     })
  //   });

  // $http.put('http://testtask.callway.com.ua/api/addItem', {'X':25, 'Y':11}, config)
  //   .success(function(res) {
  //   console.log(res);
  //     // res.forEach(function(item) {
  //     //   $scope.data[0].push(item.X);
  //     //   $scope.data[1].push(item.Y);
  //     // })
  //   });

  $scope.addItem = function() {
    $scope.data[0].push($scope.coordX),
    $scope.labels.push($scope.newLabel);

  // var data = {
  //    "Value": "sample string 1"
  // };
  //   $http.put('http://testtask.callway.com.ua/api/addItem', data, config).success(function(data, status, headers, config) {
  //     // console.log(res);
  //   }).error(function(data, status, headers, config) {
  //     alert( "failure message: " + JSON.stringify({data: data}));
  //   });
    $scope.coordX = '',
    $scope.newLabel = ''
  };

  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'bottom'
        }
      ]
    }
  };
});