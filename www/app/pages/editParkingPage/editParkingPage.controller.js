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
                        vin: ''
                    };
                    this.message = '';
                    this._activate();
                };
                EditParkingPageController.prototype._activate = function () {
                    console.log('editParkingPage controller actived');
                    this.getVehicleByUserId();
                };
                EditParkingPageController.prototype.addVehicle = function () {
                    var self = this;
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
                return EditParkingPageController;
            }());
            EditParkingPageController.controllerId = 'psApp.pages.editParkingPage.editParkingPageController';
            EditParkingPageController.$inject = [
                'psApp.pages.editParkingPage.editParkingPageService'
            ];
            editParkingPage.EditParkingPageController = EditParkingPageController;
            angular.module('psApp.pages.editParkingPage')
                .controller(EditParkingPageController.controllerId, EditParkingPageController);
        })(editParkingPage = pages.editParkingPage || (pages.editParkingPage = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));
//# sourceMappingURL=editParkingPage.controller.js.map