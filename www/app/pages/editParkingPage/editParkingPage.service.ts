/**
 * EditParkingPageService
 * @description - Edit Parking Page Service
 */

module app.pages.editParkingPage {

    'use strict';

    /**********************************/
    /*           INTERFACES           */
    /**********************************/
    export interface IEditParkingPageService {
        getVehicleByUserId: () => any;
    }

    /**********************************/
    /*         CLASS DEFINITION       */
    /**********************************/
    export class EditParkingPageService {

        /**********************************/
        /*           PROPERTIES           */
        /**********************************/
        static serviceId = 'psApp.pages.editParkingPage.editParkingPageService';

        /*-- INJECT DEPENDENCIES--*/
        static $inject = [
            'psApp.core.restApi.restApiService'
        ];


        /**********************************/
        /*           CONSTRUCTOR          */
        /**********************************/
        constructor(private restApi: app.core.restApi.IRestApi) {

        }

        /**********************************/
        /*            METHODS             */
        /**********************************/
        getVehicleByUserId(): any {
            var promise;
            promise = this.restApi.queryObject({ url: 'users/3/vehicles'})
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
        .module('psApp.pages.editParkingPage')
        .service(EditParkingPageService.serviceId, EditParkingPageService);

}
