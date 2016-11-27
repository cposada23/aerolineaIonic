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
      .state('app.reservarPaso2',{
        url:'/reservaPaso2',
        views:{
          'contenido':{
            templateUrl:'app/dashboard/reservas/views/paso2.html',
            controller: 'paso2Ctrl as reserva'
          }
        }

      })
      .state('app.confirmar', {
        url:'/confirmar',
        views:{
          'contenido':{
            templateUrl:'app/dashboard/reservas/views/confirmar.html',
            controller: 'confirmarCtrl as confirmar'
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
      })
      .state('app.misTiquetes', {
        url:'/misTiquetes',
        views:{
          'dashboard-tab':{
              templateUrl:'app/dashboard/reservas/misReservas/misTiquetes.html',
              controller: 'misTiquetesCrtl as misTiquetes'
          }
        }
      });
  }
}());
