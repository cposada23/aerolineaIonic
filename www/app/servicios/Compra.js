(function () {
  angular.module('aerolinea').factory('Compra', Compra);

  Compra.$inject = ['$http', 'server'];

  function Compra($http,server) {
    var compra = {}
    return {
      misCompras: function () {
        return $http.get(server.servidor + '/usuario/misCompras');
      },
      getTiquetes: function (id) {
        return $http.get(server.servidor + '/usuario/misTiquetes/' + id);
      },
      setCompra : function (c) {
        compra = c;
      },
      getCompra : function () {
        return compra;
      }

    }
  }
}());
