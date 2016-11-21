(function () {
  angular
    .module('aerolinea')
    .config(Config);


  Config.$inject = ['$stateProvider'];

  function Config($stateProvider) {
    $stateProvider
      .state('registro',{
        url:'/registro',
        templateUrl: 'app/Auth/Registro/registro.html',
        controller:'RegistroCtrl as registro'
      });
  }

}());
