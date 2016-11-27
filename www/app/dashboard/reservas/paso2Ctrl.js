(function () {
  angular.module('aerolinea').controller('paso2Ctrl', paso2Ctrl);

  paso2Ctrl.$inject = ['Reserva', '$state', '$scope'];
  function paso2Ctrl(Reserva, $state, $scope) {
    console.log("entrando a paso 2");
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
