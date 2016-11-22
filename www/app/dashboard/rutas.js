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
      });
  }
}());
