/**
* module()
* @description - Here inject dependencies of Angular Modules and 3rd Party
*/

(function(): void {
    'use strict';

    angular
        .module('psApp.core', [
            /* Angular Modules */
            'ui.router'

            /* 3rd Party */
        ]);

})();
