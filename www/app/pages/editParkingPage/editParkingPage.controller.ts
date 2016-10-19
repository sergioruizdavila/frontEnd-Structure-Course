/**
 * EditParkingPageController
 * @description - Edit Parking Page Controller
 */

module app.pages.editParkingPage {

    'use strict';

    /**********************************/
    /*           INTERFACES           */
    /**********************************/
    export interface IEditParkingPageController {
        addVehicle: () => void;
        getVehicleByUserId: () => void;
    }

    /**********************************/
    /*         CLASS DEFINITION       */
    /**********************************/
    export class EditParkingPageController implements IEditParkingPageController {

        /**********************************/
        /*           PROPERTIES           */
        /**********************************/
        static controllerId = 'psApp.pages.editParkingPage.editParkingPageController';
        vehicleList: Array<any>;
        owner: string;
        /*-- INJECT DEPENDENCIES--*/
        static $inject = [
            'psApp.pages.editParkingPage.editParkingPageService'
        ];


        /**********************************/
        /*           CONSTRUCTOR          */
        /**********************************/
        constructor(private EditParkingPageService: app.pages.editParkingPage.IEditParkingPageService) {
            this._init();
        }

        /* -- INITIALIZE METHOD -- */
        private _init() {
            //Init Variables
            this.vehicleList = [];
            this.owner = "";

            this._activate();
        }

        /* -- ACTIVATE METHOD -- */
        private _activate(): void {
            //LOG
            console.log('editParkingPage controller actived');
            this.getVehicleByUserId();
        }


        /**********************************/
        /*             METHODS            */
        /**********************************/
        addVehicle(): void {
            console.log('Entro');
        }

        getVehicleByUserId(): void {
            let self = this;
            this.EditParkingPageService.getVehicleByUserId(1).then(
                function(response){
                    console.log('Mis datos obtenidos son:', response);
                    //this.vehicleList = response.vehicles[1];
                    for (let i = 0; i < response.vehicles.length; i++) {
                      self.vehicleList.push(response.vehicles[i]);
                      console.log(self.vehicleList);
                    }
                    self.owner = response.vehicles[0].user.first_name + ' ' + response.vehicles[0].user.last_name;
                    console.log("xd");
                    console.log(self.vehicleList);
//                    for (let i = 0; i < array.length; i++) {
                      //self.vehicleList.push(new app.core.models.vehicle.(response.vehicles[i]));

//                    }
                }
            );
        }

    }


    angular.module('psApp.pages.editParkingPage')
            .controller(EditParkingPageController.controllerId, EditParkingPageController);

}
