(function () {
    'use strict';
    angular
        .module('psApp.pages.editParkingPage', [])
        .config(config);
    function config($stateProvider) {
        console.log('editParkingPage config launched');
        $stateProvider.state('page.editParkingPage', {
            url: '/pages/edit',
            templateUrl: 'editParkingPage.html'
        });
    }
})();
//# sourceMappingURL=editParkingPage.config.js.map