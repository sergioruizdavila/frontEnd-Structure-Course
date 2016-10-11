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
    }

    /**********************************/
    /*         CLASS DEFINITION       */
    /**********************************/
    export class EditParkingPageController implements IEditParkingPageController {

        /**********************************/
        /*           PROPERTIES           */
        /**********************************/
        static controllerId = 'psApp.pages.editParkingPage.editParkingPageController';


        /**********************************/
        /*           CONSTRUCTOR          */
        /**********************************/
        constructor() {
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

    }


    angular.module('psApp.pages.editParkingPage')
            .controller(EditParkingPageController.controllerId, EditParkingPageController);

}
