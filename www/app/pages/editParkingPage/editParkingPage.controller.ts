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
        id: string;
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
        formTitle: string;

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

            this.owner = '';

            this.formTitle = "Add Vehicle's";

            this.vehicleData = {
                id: '',
                model: '',
                year: '',
                vin: ''
            };

            this.message = '';

            this.buttonType = 'Agregar';

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

        cleanForm(): void {
            this.vehicleData.id = '';
            this.vehicleData.model = '';
            this.vehicleData.year = '';
            this.vehicleData.vin = '';
            this.buttonType = 'Add';
            this.formTitle = "Add Vehicle's";
            this.message = '';
        }

        addEditVehicle(): void {
            var self = this;

            if(this.vehicleData.id){
                /* Edit Vehicle */
                this.EditParkingPageService.editVehicle(
                        this.vehicleData.id,
                        this.vehicleData.model,
                        this.vehicleData.year,
                        this.vehicleData.vin)
                .then(
                    function(response) {
                        if(response.vehicle == false) {
                            self.message = "No pudo editarse";
                        } else  {
                            self.message = "Edición exitosa";
                            /* TODO: No pushear sino actualizar lista */
                            self.vehicleList.push(response.vehicle);
                        }
                    }
                );

            } else {
                /* Add Vehicle */
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

        }

        editVehicle(vehicle): void{
            console.log(vehicle);
            this.vehicleData.id = vehicle.id;
            this.vehicleData.model = vehicle.model;
            this.vehicleData.year = vehicle.year;
            this.vehicleData.vin = vehicle.vin;
            this.buttonType = 'Edit';
            this.formTitle = "Edit Vehicle's";
            this.message = '';

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
