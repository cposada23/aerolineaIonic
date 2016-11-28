(function () {
  angular.module('aerolinea').controller('pagoTiqueteCtrl', pagoTiqueteCtrl);

  pagoTiqueteCtrl.$inject = ['Tiquete', '$state', '$ionicPopup'];

  function pagoTiqueteCtrl(Tiquete, $state, $ionicPopup) {
    var vm = this;
    vm.tiquete = Tiquete.getTiquete();
    console.log("-------"  +JSON.stringify(vm.tiquete) );

    vm.pagar = function () {
      Tiquete.pagarTiquete(vm.tiquete._id).success(function (response) {
          console.log("00000000000000000000000000000000000000");
          console.log("reponse" + JSON.stringify(response));
          $ionicPopup.alert({
            title:'Tiquete pagado con exito',
            content: ''
          }).then(function (res) {
            $state.go('app.dashboard');
          });
      }).error(function (error) {
          console.error(error);
      });

    }

  }
}());
