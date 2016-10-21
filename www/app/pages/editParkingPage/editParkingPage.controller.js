var app;
(function (app) {
    var pages;
    (function (pages) {
        var editParkingPage;
        (function (editParkingPage) {
            'use strict';
            var EditParkingPageController = (function () {
                function EditParkingPageController(EditParkingPageService) {
                    this.EditParkingPageService = EditParkingPageService;
                    this._init();
                }
                EditParkingPageController.prototype._init = function () {
                    this.vehicleList = [];
                    this.owner = "";
                    this.vehicleData = {
                        model: '',
                        year: '',
                        vin: '',
                        id: ''
                    };
                    this.message = '';
                    this._activate();
                    this.buttonType = 'Agregar';
                    this.formTitle = "Add Vehicle's";
                };
                EditParkingPageController.prototype._activate = function () {
                    console.log('editParkingPage controller actived');
                    this.getVehicleByUserId();
                };
                EditParkingPageController.prototype.addEditVehicle = function () {
                    var self = this;
                    if (this.vehicleData.id) {
                        this.EditParkingPageService.editVehicle(this.vehicleData.id, this.vehicleData.model, this.vehicleData.year, this.vehicleData.vin)
                            .then(function (response) {
                            if (response.vehicle == false) {
                                self.message = "No pudo crearse";
                            }
                            else {
                                self.message = "Creación exitosa";
                            }
                        });
                    }
                    else {
                        this.EditParkingPageService.addVehicle(this.vehicleData.model, this.vehicleData.year, this.vehicleData.vin)
                            .then(function (response) {
                            if (response.vehicle == false) {
                                self.message = "No pudo crearse";
                            }
                            else {
                                self.message = "Creación exitosa";
                                self.vehicleList.push(response.vehicle);
                            }
                        });
                    }
                };
                EditParkingPageController.prototype.editVehicle = function (vehicle) {
                    console.log(vehicle);
                    this.vehicleData.id = vehicle.id;
                    this.vehicleData.model = vehicle.model;
                    this.vehicleData.year = vehicle.year;
                    this.vehicleData.vin = vehicle.vin;
                    this.buttonType = 'Editar';
                    this.formTitle = "Edit Vehicle's";
                    this.message = "";
                };
                EditParkingPageController.prototype.cleanForm = function () {
                    this.vehicleData.model = "";
                    this.vehicleData.year = "";
                    this.vehicleData.vin = "";
                    this.vehicleData.id = "";
                    this.buttonType = 'Agregar';
                    this.formTitle = "Add Vehicle's";
                    this.message = "";
                };
                EditParkingPageController.prototype.getVehicleByUserId = function () {
                    var self = this;
                    this.EditParkingPageService.getVehicleByUserId().then(function (response) {
                        for (var i = 0; i < response.vehicles.length; i++) {
                            self.vehicleList.push(response.vehicles[i]);
                        }
                        self.owner = response.vehicles[0].user.first_name + ' '
                            + response.vehicles[0].user.last_name;
                    });
                };
                EditParkingPageController.controllerId = 'psApp.pages.editParkingPage.editParkingPageController';
                EditParkingPageController.$inject = [
                    'psApp.pages.editParkingPage.editParkingPageService'
                ];
                return EditParkingPageController;
            }());
            editParkingPage.EditParkingPageController = EditParkingPageController;
            angular.module('psApp.pages.editParkingPage')
                .controller(EditParkingPageController.controllerId, EditParkingPageController);
        })(editParkingPage = pages.editParkingPage || (pages.editParkingPage = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));
//# sourceMappingURL=editParkingPage.controller.js.map