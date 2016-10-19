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
        vehiclesList: Array<any>;
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
            this.vehiclesList = [];
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
                    for (let i = 0;  i < response.vehicles.length; i++){
                        //self.vehiclesList.push(new app.core.models.vehicle.Vehicle(response.vehicles[i]));
                        self.vehiclesList.push(response.vehicles[i]);
                    }
                    self.owner = self.vehiclesList[0].user.first_name + " " + self.vehiclesList[0].user.last_name;
                }
            );

        }

    }


    angular.module('psApp.pages.editParkingPage')
            .controller(EditParkingPageController.controllerId, EditParkingPageController);

}
