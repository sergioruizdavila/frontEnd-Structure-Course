(function () {
    'use strict';
    angular
        .module('psApp.pages.editParkingPage', [])
        .config(config);
    function config($stateProvider) {
<<<<<<< HEAD
        console.log('editParkingPage config lauched');
=======
        console.log('editParkingPage config launched');
>>>>>>> 662ccea73e07e962d2a9eada4ab28f804b15689f
        $stateProvider.state('page.editParkingPage', {
            url: '/pages/edit',
            templateUrl: 'editParkingPage.html'
        });
    }
})();
//# sourceMappingURL=editParkingPage.config.js.map