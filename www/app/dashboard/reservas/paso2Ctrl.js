(function () {
  angular.module('aerolinea').controller('paso2Ctrl', paso2Ctrl);

  paso2Ctrl.$inject = ['Reserva', '$state'];
  function paso2Ctrl(Reserva, $state) {
    console.log("entrando a paso 2");
    var vm = this;
    vm.reserva = Reserva.getReserva();


    vm.confirmar = function() {
      if(vm.reserva.numeroTiquetes){
        console.log("yendo a confirmar");
        Reserva.setReserva(vm.reserva);
        $state.go('app.confirmar');
      }else{
        console.log("mal");
        alert("ingrese el numero de tiquetes");
      }

    }

  }
}());
