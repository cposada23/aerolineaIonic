(function () {
  angular.module('aerolinea').controller('misTiquetesCrtl',misTiquetesCrtl);

  misTiquetesCrtl.$inject = ['Compra', '$scope','$ionicPopup'];
  function misTiquetesCrtl(Compra, $scope,$ionicPopup) {
    var vm = this;
    vm.compra = Compra.getCompra();
    vm.tiquetes = [];
    vm.getTiquetes = function () {
      Compra.getTiquetes(vm.compra._id).success(function (tiquetes) {
        vm.tiquetes = tiquetes;
      }).error(function (error) {
        console.error("error "  +   error);
      });
    }

    $scope.$on('$ionicView.enter', function () {
      console.log("entrarnrnrnrnrn");
      $ionicPopup.alert({
        title:'informacion de tiquete',
        content: ''
      }).then(function (res) {
      });
      vm.compra = Compra.getCompra();
      vm.getTiquetes();
    });

  }


}());
