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
                    this._activate();
                };
                EditParkingPageController.prototype._activate = function () {
                    console.log('editParkingPage controller actived');
                };
                EditParkingPageController.prototype.addVehicle = function () {
                    console.log('Entro');
                };
                EditParkingPageController.prototype.getVehicleByUserId = function () {
                    this.EditParkingPageService.getVehicleByUserId(1).then(function (response) {
                        console.log('Mis datos obtenidos son:', response);
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