/**
* config()
* @description - Edit Parking Page config file
*/

(function() {
    'use strict';

    angular
        .module('psApp.pages.editParkingPage', [])
        .config(config);


        function config($stateProvider: angular.ui.IStateProvider) {
            // LOG
            console.log('editParkingPage config launched');

            // ROUTE
            $stateProvider.state('page.editParkingPage', {
                url: '/pages/edit',
                templateUrl: 'editParkingPage.html'
            });


        }

})();
