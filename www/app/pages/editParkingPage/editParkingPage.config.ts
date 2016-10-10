/**
* config()
<<<<<<< HEAD
* @description - Edit Parking Config file
*/

(function(){
  'use strict'

  angular
    .module('psApp.pages.editParkingPage', [])
    .config(config);


    function config($stateProvider: angular.ui.IStateProvider){
      // LOG
      console.log('editParkingPage config lauched');

      //ROUTE
      $stateProvider.state('page.editParkingPage',{
        url: '/pages/edit',
        templateUrl: 'editParkingPage.html'
      });


    }
=======
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
>>>>>>> 662ccea73e07e962d2a9eada4ab28f804b15689f

})();
