var app = angular.module('plunker', [
  'ui.router',
  'ui.bootstrap',
  'ui.router.tabs',
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");//默认地址
    
    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainCtrl',
        views: {
          '@' : {
            templateUrl: 'detail.html',
            controller: 'DetailController'
          }
        }
      })
      .state('main.tab1', {
        url: '/tab1',
        templateUrl: 'tab1.html'
      })
      .state('main.tab2', {
        url: '/tab2',
        templateUrl: 'tab2.html'
      })
      .state('main.tab3', {
        url: '/tab3',
        templateUrl: 'tab3.html'
      })
  }]);

//定义控制器
app.controller('MainCtrl', function($scope) {
     $scope.name = 'World';
		 console.log($scope);
});
