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
        logIn:(email, password) => any;

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
        static $inject = [
            'psApp.core.restApi.restApiService'
        ];


        /**********************************/
        /*           CONSTRUCTOR          */
        /**********************************/
        constructor(private restApi: app.core.restApi.IRestApi) {}

        /**********************************/
        /*            METHODS             */
        /**********************************/
        //TODO: Crear el servicio: logInService()

        logIn(email, password): any {
            var promise;

            promise = this.restApi.create({ url: 'users/sign_in'},{email:email, password:password})
                .$promise.then(function(response) {
                    return response;
                })
                .catch(function() {
                    return 'Error';
                });

            return promise;
        }

}

    angular
        .module('psApp.pages.logInPage')
        .service(LogInPageService.serviceId, LogInPageService);


}
