(function () {
  angular.module('aerolinea').controller('reservaCtrl' ,reservaCtrl );

  reservaCtrl.$inject = ['Reserva' ,'$state'];

  function reservaCtrl(Reserva, $state) {


    var vm = this;
    vm.ciudades = [];
    vm.vuelosIda = [];
    vm.vuelosRegreso = [];
    vm.reserva = {};
    vm.ciudadOrigen;
    vm.ciudadDestino;
    vm.mostrar = false;
    vm.mostrarVuelosIda = false;
    vm.mostrarVuelosRegreso = false;
    vm.tipos = [
      {
        id: 1,
        tipo: "Ida"
      },{
        id:2,
        tipo: "Ida y Regreso"
      }
    ];
    vm.tipo;

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
      if(vm.ciudadOrigen && vm.ciudadDestino && vm.tipo){
        vm.mostrar = true;
        vm.mostrarVuelosRegreso = false;
        Reserva.getVuelos(vm.ciudadOrigen._id, vm.ciudadDestino._id).then(function success(response) {
          console.log("Vuelos " +JSON.stringify(response));
          vm.vuelosIda = response.data.vuelos;
          vm.mostrarVuelosIda = true;
        }, function error(error) {
          console.error("error " + JSON.stringify(error));
        });
        if(vm.tipo.id == 2){
          Reserva.getVuelos(vm.ciudadDestino._id, vm.ciudadOrigen._id).then(function success(response) {
            vm.vuelosRegreso = response.data.vuelos;
          }, function error(error) {
            console.error("error " + JSON.stringify(error));
          });

        }
      }

    }

    vm.seleccionVueloIda = function (vuelo) {
      vm.reserva.tipo = vm.tipo;
      vuelo.ciudadOrigen = vm.ciudadOrigen;
      vuelo.ciudadDestino = vm.ciudadDestino;
      vm.reserva.vueloIda = vuelo;

      if(vm.tipo.id == 1){
        Reserva.setReserva(vm.reserva);
        console.log("continuar reserva " + JSON.stringify(Reserva.getReserva()));
        $state.go('app.reservarPaso2');
      }
      else{
        vm.mostrarVuelosIda = false;
        vm.mostrarVuelosRegreso = true;

      }

    }


    vm.seleccionVueloRegreso = function (vuelo) {
      vuelo.ciudadOrigen = vm.ciudadDestino;
      vuelo.ciudadDestino  = vm.ciudadOrigen;
      vm.reserva.vueloRegreso = vuelo;
      Reserva.setReserva(vm.reserva);
      console.log("continuar reserva " + JSON.stringify(Reserva.getReserva()));
      $state.go('app.reservarPaso2');
    }
  }
}());
