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


            this._activate();
        }

        /* -- ACTIVATE METHOD -- */
        private _activate(): void {
            //LOG
            console.log('editParkingPage controller actived');
        }


        /**********************************/
        /*             METHODS            */
        /**********************************/
        addVehicle(): void {
            console.log('Entro');
        }

        getVehicleByUserId(): void {
            this.EditParkingPageService.getVehicleByUserId(1).then(
                function(response){
                    console.log('Mis datos obtenidos son:', response);
                }
            );
        }

    }


    angular.module('psApp.pages.editParkingPage')
            .controller(EditParkingPageController.controllerId, EditParkingPageController);

}
