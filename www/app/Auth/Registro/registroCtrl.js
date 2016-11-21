(function(){
  angular.module('aerolinea').controller('RegistroCtrl', RegistroCtrl);

  RegistroCtrl.$inject = ['AuthService' , '$ionicLoading', '$rootScope'];

  function RegistroCtrl(AuthService, $ionicLoading, $rootScope) {
    var vm = this;



    vm.registro = function(){
      console.log("registro");
      //$ionicLoading.show({template:'<ion-spinner icon="lines"/>'});
      if(vm.user){
        AuthService.signup(vm.user);
      }else{
        console.log("no user");
      }


    };



    $rootScope.$on('userSingUp', function () {
      $ionicLoading.hide();
      console.log("usuario se registro correctamente ");
      //$state.go('app.dashboard');
    });

    $rootScope.$on('failedSingup', function () {
      $ionicLoading.hide();
      console.error("fallo el registro");
    });



  }

}());
