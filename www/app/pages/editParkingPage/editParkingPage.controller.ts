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
        addEditVehicle: () => void;
        getVehicleByUserId: () => void;
        editVehicle: (vehicle) => void;
    }

    export interface IVehicleData {
        model: string;
        year: string;
        vin: string;
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
        vehicleData: IVehicleData;
        message: string;
        buttonType: string;
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

            this.vehicleData = {
                model: '',
                year: '',
                vin: ''
            };

            this.message = '';

            this._activate();

            this.buttonType = 'Agregar';
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

        addEditVehicle(): void {

            var self = this;

            this.EditParkingPageService.addVehicle(
                    this.vehicleData.model,
                    this.vehicleData.year,
                    this.vehicleData.vin)
            .then(
                function(response) {
                    if(response.vehicle == false) {
                        self.message = "No pudo crearse";
                    } else  {
                        self.message = "Creación exitosa";
                        self.vehicleList.push(response.vehicle);
                    }
                }
            );

        }

        editVehicle(vehicle): void{
            console.log(vehicle);
            this.vehicleData.model = vehicle.model;
            this.vehicleData.year = vehicle.year;
            this.vehicleData.vin = vehicle.vin;
            this.buttonType = 'Editar';

        }

        getVehicleByUserId(): void {
            let self = this;
            this.EditParkingPageService.getVehicleByUserId().then(
                function(response){

                    for (let i = 0; i < response.vehicles.length; i++) {
                      self.vehicleList.push(response.vehicles[i]);
                    }
                    self.owner = response.vehicles[0].user.first_name + ' '
                                 + response.vehicles[0].user.last_name;
                }
            );
        }

    }


    angular.module('psApp.pages.editParkingPage')
            .controller(EditParkingPageController.controllerId, EditParkingPageController);

}
