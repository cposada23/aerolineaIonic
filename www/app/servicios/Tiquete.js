(function () {
  angular.module('aerolinea').factory('Tiquete', Tiquete);

  Tiquete.$inject = ['server', '$http'];

  function Tiquete(server, $http) {
    var tiquete = {};
    return {
      getTiquete: function () {
        return tiquete;
      },
      setTiquete: function (v) {
        tiquete = v;
      },
      pagarTiquete : function (id) {
        return $http.get(server.servidor + '/usuario/pagarTiquete/'+id);
      }

    }
  }
}());
