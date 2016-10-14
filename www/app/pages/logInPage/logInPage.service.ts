/**
 * LogInPageService
 * @description - Log In Page Service
 */

module app.pages.logInPage {

    'use strict';

    /**********************************/
    /*           INTERFACES           */
    /**********************************/
    export interface ILogInPageService {

    }

    /**********************************/
    /*         CLASS DEFINITION       */
    /**********************************/
    export class LogInPageService {

        /**********************************/
        /*           PROPERTIES           */
        /**********************************/
        static serviceId = 'psApp.pages.logInPage.logInPageService';

        /*-- INJECT DEPENDENCIES--*/
        static $inject = [];


        /**********************************/
        /*           CONSTRUCTOR          */
        /**********************************/
        constructor() {}

        /**********************************/
        /*            METHODS             */
        /**********************************/
        //TODO: Crear el servicio: logInService()

    }

    angular
        .module('psApp.pages.logInPage')
        .service(LogInPageService.serviceId, LogInPageService);

}
