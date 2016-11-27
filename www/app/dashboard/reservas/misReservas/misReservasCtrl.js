(function () {
  angular.module('aerolinea').controller('misReservasCtrl', misReservasCtrl);

  misReservasCtrl.$inject = ['Compra' ,'$state', '$scope','$ionicPopup'];
  function misReservasCtrl(Compra,$state, $scope , $ionicPopup) {
    var vm = this;

    vm.misCompras = [];

    vm.listarCompras = function () {
      Compra.misCompras().success(function (response) {
        console.log("response "  + JSON.stringify(response));
        vm.misCompras = response;
      }).error(function (error) {
        console.error(error);
      });
    }


    $scope.$on('$ionicView.enter', function () {
      console.log("entrarnrnrnrnrn");
      vm.listarCompras();
    });


    vm.verQR = function () {
      $ionicPopup.alert({
        title:'ver qr',
        content: 'ver qr'
      }).then(function (res) {
      });
    }


    vm.verTiquetes = function (compra) {
      Compra.setCompra(compra);
      $ionicPopup.alert({
        title:'ver informacion de tiquete',
        content: 'ver qr'
      }).then(function (res) {
        $state.go('app.misTiquetes');
      });
    }
  }
}());
