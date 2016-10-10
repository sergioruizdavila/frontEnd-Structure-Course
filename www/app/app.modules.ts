/**
* module()
* @description - Here inject dependencies of App modules and components,
* such as controllers, services, directives, etc.
*/

(function() {
    'use strict';

    angular
        .module('psApp', [
            'psApp.pages.editParkingPage'
        ]);

})();
