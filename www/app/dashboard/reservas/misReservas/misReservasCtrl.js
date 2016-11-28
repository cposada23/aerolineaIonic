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




    vm.verQR = function (ruta) {
      $scope.ruta = ruta;
      $ionicPopup.show({
          template: '<img ng-src="{{ruta}}">',
          title: 'QR',
          scope: $scope,
          buttons: [
            {
              text: '<b>OK</b>',
              type: 'button-positive',
              onTap: function(e) {
                return e;
              }
            }
          ]
        });
    }


    vm.verTiquetes = function (compra) {
      Compra.setCompra(compra);
      $ionicPopup.alert({
        title:'ver informacion de reserva?',
        content: ''
      }).then(function (res) {
        $state.go('app.misTiquetes');
      });
    }
  }
}());
