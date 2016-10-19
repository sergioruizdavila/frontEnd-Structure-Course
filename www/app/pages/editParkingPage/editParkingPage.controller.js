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
                    this._activate();
                };
                EditParkingPageController.prototype._activate = function () {
                    console.log('editParkingPage controller actived');
                    this.getVehicleByUserId();
                };
                EditParkingPageController.prototype.addVehicle = function () {
                    console.log('Entro');
                };
                EditParkingPageController.prototype.getVehicleByUserId = function () {
                    var self = this;
                    this.EditParkingPageService.getVehicleByUserId(1).then(function (response) {
                        console.log('Mis datos obtenidos son:', response);
                        for (var i = 0; i < response.vehicles.length; i++) {
                            self.vehicleList.push(response.vehicles[i]);
                            console.log(self.vehicleList);
                        }
                        self.owner = response.vehicles[0].user.first_name + ' ' + response.vehicles[0].user.last_name;
                        console.log("xd");
                        console.log(self.vehicleList);
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