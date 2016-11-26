(function () {
  angular.module('aerolinea').controller('confirmarCtrl', confirmarCtrl);

  confirmarCtrl.$inject = ['Reserva'];
  function confirmarCtrl(Reserva) {
    var vm = this;

    vm.reserva = Reserva.getReserva();

    
  }
}());
