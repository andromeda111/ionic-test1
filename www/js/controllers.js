angular.module('app.controllers', [])

.controller('homePageCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function


// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  // const apiUrl = `http://pokeapi.co/api/v2/pokemon/${num}`
  const apiUrl = `https://dream-frog.herokuapp.com/`
  $scope.dreamsArr = []
  $scope.getDreams= function () {
    var num = Math.ceil(Math.random()*151)
    console.log('Get Stuff Button Works!');
    $http.get(apiUrl).then(result => {
      console.log(result);
      $scope.dreamsArr = result.data
    })
  }

  $scope.deleteDreams= function () {
    let del = $scope.dreamsArr.length - 1
    $http.delete(apiUrl + `dreams/4`)
  }
}])
