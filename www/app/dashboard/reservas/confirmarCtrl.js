(function () {
  angular.module('aerolinea').controller('confirmarCtrl', confirmarCtrl);

  confirmarCtrl.$inject = ['Reserva', '$ionicPopup' , '$state', '$scope'];
  function confirmarCtrl(Reserva , $ionicPopup, $state, $scope) {
    var vm = this;

    vm.reserva = Reserva.getReserva();

    $scope.$on('$ionicView.enter', function () {
      console.log("entrarnrnrnrnrn");
      vm.reserva = Reserva.getReserva();
      if(!vm.reserva.tipo){
        console.log("no hay reservaaaaaaaaaaaaaa");
        $state.go('app.reservar');
      }
    });

    vm.confirmarReserva = function () {
      console.log("lllame confirmar");
      Reserva.generarReserva(vm.reserva).success(function (response) {
        console.log("response " + JSON.stringify(response) );
        $ionicPopup.alert({
          title:'reserva confirmada',
          content: 'Puedes ver la infomación en el dashboard'
        }).then(function (res) {
          Reserva.setReserva(null);
          $state.go('app.reservar');
        });
      }).error(function (error) {
        $ionicPopup.alert({
          title:'Ocurrio un error intenta de nuevo',
          content: 'Es posible que los puestos ya hayan sido reservados'
        }).then(function (res) {
        });
        console.error("error" + error);
      });
    }


  }
}());
