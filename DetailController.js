'use strict';

angular.module('plunker')
	.controller('DetailController', ['$scope', '$stateParams', '$rootScope', function ($scope, $stateParams, $rootScope) {

		$scope.tabData   = [
			{
				heading: 'Tab 1',
				route:   'main.tab1'
			},
			{
				heading: 'Tab 2',
				route:   'main.tab2',
				warningCount: 2
			},
			{
				heading: 'Tab 3',
				route:   'main.tab3'
			}
		];
		
		$rootScope.$on('$stateChangeStart', function (event, to, toParams, from, fromParams) {
      console.log('Going to: ' + to.name);
      if (to.name.indexOf('tab3') > -1) {
        event.preventDefault();
        var evt = $rootScope.$broadcast('$stateChangeError', 
        to.self, toParams, from.self, fromParams, "User cancelled state change.");
        console.log('STOPPED!');
      }
    });

	}]);
