(function () {
  angular.module('aerolinea').controller('confirmarCtrl', confirmarCtrl);

  confirmarCtrl.$inject = ['Reserva'];
  function confirmarCtrl(Reserva) {
    var vm = this;

    vm.reserva = Reserva.getReserva();

    vm.confirmarReserva = function () {
      console.log("lllame confirmar");
      Reserva.generarReserva(vm.reserva).success(function (response) {
        console.log("response " + JSON.stringify(response) );
      }).error(function (error) {
        console.error("error" + error);
      });
    }


  }
}());
