(function(){
  angular.module('aerolinea').controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['AuthService', '$ionicLoading', '$rootScope'];

  function LoginCtrl(AuthService, $ionicLoading, $rootScope) {
    var vm = this;

    vm.user = {};
    vm.login = function () {
      console.log("login "  + JSON.stringify(vm.user));
      //$ionicLoading.show({template:'<ion-spinner icon="lines"/>'});
      AuthService.login(vm.user);

    };


    $rootScope.$on('userLoggedIn', function () {
      $ionicLoading.hide();
      console.log("usuario se loggeo ");
      //$state.go('app.dashboard');
    });

    $rootScope.$on('userFailedLogin', function () {
      $ionicLoading.hide();
      console.log("fallo el login");
    });



  }

}());
