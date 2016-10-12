/**
* config() - Here inject dependencies App modules and components
* sush a controllers, services, directives, etc
*/

(function(){
  'use strict'

  angular
    .module('psApp', [
        'psApp.core',
        'psApp.core.restApi',
        'psApp.pages.editParkingPage'
    ])
    .config(config);

    function config($urlRouterProvider: angular.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise('/page');
    }

})();
