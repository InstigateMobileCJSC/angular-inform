inform.directive('inform', function () {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'angular-inform/directive.ng.html',
    controller: 'InformCtrl'
  };
});