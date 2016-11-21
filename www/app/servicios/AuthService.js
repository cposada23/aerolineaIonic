(function(){
  "use strict";

  angular
    .module('aerolinea')
    .factory('AuthService',AuthService );

  AuthService.$inject = ['$rootScope', '$auth'];

  function AuthService($rootScope, $auth) {
    var userData = $auth.getPayload();

    return {
      isAuthenticated: function(){
        return $auth.isAuthenticated();
      },

      signup: function (user) {
        console.log("user singup");
        $auth.signup(user).then(this.successSingup).catch(this.failedSingup);
      },

      successSingup: function (response) {
        $auth.setToken(response);
        console.log("responsessss" + JSON.stringify(response));
        userData = $auth.getPayload();
        $rootScope.$emit('userSingUp', {data: userData});
      },

      failedSingup: function (response) {
        userData = undefined;
        $rootScope.$emit('userFailedSingUp', {error: response.data});
      },

      login: function (user) {
        $auth.login(user).then(this.successAuth).catch(this.failedAuth);
      },
      logOut: function() {
        $auth.logout();
        userData = undefined;

        $rootScope.$emit('userLoggedOut');
      },
      getUser: function(){
        return userData;
      },
      successAuth: function(response) {
        userData = $auth.getPayload();
        console.log("responsee "  + JSON.stringify(response));
        console.log("userdata " + JSON.stringify(userData));
        $rootScope.profilePicture = userData.profilePicture;
        $rootScope.$emit('userLoggedIn', {data: userData});
      },
      failedAuth: function(response) {
        userData = undefined;
        console.log("responsee "  + JSON.stringify(response));
        $rootScope.$emit('userFailedLogin');
      }
    }
  }
})();
