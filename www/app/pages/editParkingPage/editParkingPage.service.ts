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
        getVehicles: () => void;
        getVehicleByUserId: (userId) => any;
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
        getVehicles(): any {

        }

        getVehicleByUserId(userEmail, userPassword): any {
            var promise;
            //http://parking-system-01.herokuapp.com/v1/users/sign_in?email=gastus2@hotmail.com&password=1234567
            promise = this.restApi.create({ url: 'sign_in'}, {email: userEmail, password: userPassword})
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
