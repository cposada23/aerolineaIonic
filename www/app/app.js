(function () {
  angular
    .module('aerolinea',['ionic','satellizer','ionMdInput'])
    .run(run)
    .constant('server', {
      //servidor:'https://passalov2.herokuapp.com'
      //servidor: 'http://localhost:3000'
      //servidor:'https://aerolinea-fundamentos-cposada23.c9users.io'
      servidor: 'https://aerolinea-cposada23.c9users.io'
    })
    .config(config);

  /**
   *  ------------------------------------ run -------------------------
   * @type {*[]}
   * */
  run.$inject = ['$ionicPlatform'];
  function run($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }


  config.$inject = ['$stateProvider','$urlRouterProvider','$authProvider', '$ionicConfigProvider', 'server'];
  function config($stateProvider, $urlRouterProvider,$authProvider, $ionicConfigProvider,server) {
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.tabs.style('striped');


    var commonConfig = {
      popupOptions: {
        location: 'no',
        toolbar: 'yes',
        width: window.screen.width,
        height: window.screen.height
      }
    };

    //commonConfig.redirectUri = 'http://localhost:8100/';
    $authProvider.loginUrl = server.servidor + '/auth/login';
    $authProvider.signupUrl = server.servidor + '/auth/signup';
    $authProvider.httpInterceptor = false;
    $authProvider.tokenHeader = 'Authorization';
    $authProvider.tokenName = 'token';
    $authProvider.withCredentials = false;

    $stateProvider


    /**
     * Estados en los que se puede estar sin estar logueado
     */

      .state('login', {
        url:'/login',
        templateUrl: 'app/Auth/Login/login.html',
        controller:'LoginCtrl as login'
      })

      /**
       * estados en los que se tiene que estar autenticado
       */

      .state('app',{
        url: '/app',
        abstract: true,
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'MenuCtrl'
      });
    /* ver otras rutas en la carpeta app/tablero */


    $urlRouterProvider.otherwise('/login');



  }

}());
