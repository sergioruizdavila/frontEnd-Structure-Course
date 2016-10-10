(function () {
    'use strict';
    angular.module('psApp', [
        'psApp.core',
        'psApp.pages.editParkingPage'
    ]).config(config);
    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise('/page');
    }
})();
//# sourceMappingURL=app.module.js.map