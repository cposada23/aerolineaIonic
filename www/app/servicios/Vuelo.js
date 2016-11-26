(function () {
  angular.module('aerolinea').factory('Vuelo', Vuelo);

  Vuelo.$inject = [];

  function Vuelo() {
    var vuelo = {};
    return {
      getVuelo: function () {
        return vuelo;
      },
      setVuelo: function (v) {
        vuelo = v;
      }

    }
  }
}());
