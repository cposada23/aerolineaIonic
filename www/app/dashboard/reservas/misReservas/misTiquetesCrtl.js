(function () {
  angular.module('aerolinea').controller('misTiquetesCrtl',misTiquetesCrtl);

  misTiquetesCrtl.$inject = ['Compra', '$scope','$ionicPopup', 'Tiquete', '$state'];
  function misTiquetesCrtl(Compra, $scope,$ionicPopup, Tiquete, $state) {
    var vm = this;
    vm.compra = Compra.getCompra();
    vm.tiquetes = [];
    vm.getTiquetes = function () {
      if(vm.compra._id){
        Compra.getTiquetes(vm.compra._id).success(function (tiquetes) {
          vm.tiquetes = tiquetes;
        }).error(function (error) {
          console.error("error "  +   error);
        });
      }
    }
    $scope.$on('$ionicView.enter', function () {
      console.log("entrarnrnrnrnrn");
      $ionicPopup.alert({
        title:'informacion de tiquetes',
        content: ''
      }).then(function (res) {
      });
      vm.compra = Compra.getCompra();
      vm.getTiquetes();
    });

    vm.pagarTiquete = function (tiquete) {
      console.log(JSON.stringify(tiquete));
      Tiquete.setTiquete(tiquete);
      $state.go('pagoTiquete');

    }

    vm.verQR = function (qr) {
      $scope.ruta = qr;
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

  }
}());
