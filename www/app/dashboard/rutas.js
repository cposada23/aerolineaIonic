(function () {
  angular
    .module('aerolinea')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('app.dashboard',{
        url:'/dashboard',
        views:{
          'dashboard-tab':{
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardCtrl as dash'
          }
        }
      }).state('app.reservar',{
        url:'/reservar',
        views:{
          'contenido':{
            templateUrl:'app/dashboard/reservas/views/paso1.html',
            controller: 'reservaCtrl as reserva'
          }
        }

      })
      .state('app.misReservas',{
        url:'/misReservas',
        views:{
          'dashboard-tab':{
              templateUrl:'app/dashboard/reservas/misReservas/misReservas.html',
              controller: 'misReservasCtrl as misReservas'
          }
        }
      });
  }
}());
