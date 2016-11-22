(function () {
  angular
    .module('aerolinea')
    .controller('DashboardCtrl',DashboardCtrl);
  DashboardCtrl.$inject = ['$rootScope','$scope','AuthService'];

  function DashboardCtrl($rootScope, $scope, AuthService) {
    var vm = this;

    $scope.$on('$ionicView.enter', function(e) {
      console.log("entrando a dash");
      vm.user = AuthService.getUser();
      vm.estilo = {
        "background-image": 'url(img/476085198.jpg)'
      };



    });


    vm.estiloFondo = {
      "background-image": 'url(img/11.jpg)'
    };



    vm.show = function () {
      console.log("rootscope " + $rootScope.profilePicture);
      console.log("holas " + JSON.stringify(AuthService.getUser()));
    }

  }
}());
