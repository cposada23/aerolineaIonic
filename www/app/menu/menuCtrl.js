(function () {
  angular
    .module('aerolinea')
    .controller('MenuCtrl', MenuCtrl);

  MenuCtrl.$inject = ['$scope','AuthService', '$ionicPopover', '$ionicHistory'];

  function MenuCtrl($scope, AuthService, $ionicPopover, $ionicHistory) {


    $scope.logout = function () {
      console.log("logout");
      $scope.popover.hide();
      $ionicHistory.clearCache();
      AuthService.logOut();
    };

    $ionicPopover.fromTemplateUrl('app/menu/sideMenu.html',{
      scope:$scope,
      animation: 'slide-in-up'
    }).then(function (popover) {
      $scope.popover =popover;
    });

    $scope.openPopover = function ($event) {
      $scope.popover.show($event);
    };

    $scope.closePopover = function () {
      $scope.popover.hide();
    };

    $scope.$on('$destroy', function () {
      $scope.popover.remove();
    });


    $scope.$on('popover.hidden', function () {
      console.log("hidden");
    });

    $scope.$on('popover.removed', function () {
      console.log("removed");
    });

  }
}());
