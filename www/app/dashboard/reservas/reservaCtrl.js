(function () {
  angular.module('aerolinea').controller('reservaCtrl' ,reservaCtrl );

  reservaCtrl.$inject = ['Reserva'];

  function reservaCtrl(Reserva) {


    var vm = this;
    vm.ciudades = [];
    vm.vuelos = [];
    vm.ciudadOrigen;
    vm.ciudadDestino;
    vm.getCiudades = function () {
      Reserva.getCiudades().then(function success(response) {
        console.log("Ciudades " +JSON.stringify(response));
        vm.ciudades = response.data;
      }, function error(error) {
        console.error("error " + JSON.stringify(error));
      });
    }

    vm.getCiudades();

    vm.buscarVuelos = function () {
      if(vm.ciudadOrigen && vm.ciudadDestino){
        vm.vuelos = Reserva.getVuelos(vm.ciudadOrigen._id, vm.ciudadDestino._id).then(function success(response) {
          console.log("Vuelos " +JSON.stringify(response));
          vm.vuelos = response.data;
        }, function error(error) {
          console.error("error " + JSON.stringify(error));
        });;
      }

    }
  }
}());
