/**
* config()
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

})();
