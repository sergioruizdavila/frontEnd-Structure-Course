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
        addVehicle: (vehicleModel, vehicleYear, vehicleVin) => any;
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
        addVehicle(vehicleModel, vehicleYear, vehicleVin): any {
          var promise;
          promise = this.restApi.create({ url: 'users/3/vehicles'}, {model:vehicleModel, year:vehicleYear, vin:vehicleVin })
              .$promise.then(function(response) {
                  return response;
              })
              .catch(function() {
                  return 'Error';
              });

          return promise;
        }

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
