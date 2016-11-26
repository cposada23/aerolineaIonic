(function () {
  angular.module('aerolinea').factory('Reserva', Reserva);

  Reserva.$inject = ['$http', 'server'];

  function Reserva($http, server) {
    var reserva = {};
    return {
      getCiudades: function () {
        return $http.get(server.servidor + '/usuario/ciudades');
      },
      getVuelos: function (ciudadOrigen, ciudadDestino) {
        return $http.get(server.servidor + '/usuario/vuelo/vuelosOrigenDestino/' + ciudadOrigen + '/' + ciudadDestino);
      },
      getReserva: function () {
        console.log("retornando reserva");
        return reserva;
      },
      setReserva: function (r) {
        reserva  = r;
      }

    }

  }
}());
