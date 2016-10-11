var app;
(function (app) {
    var pages;
    (function (pages) {
        var editParkingPage;
        (function (editParkingPage) {
            'use strict';
            var EditParkingPageController = (function () {
                function EditParkingPageController() {
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
                EditParkingPageController.controllerId = 'psApp.pages.editParkingPage.editParkingPageController';
                return EditParkingPageController;
            }());
            editParkingPage.EditParkingPageController = EditParkingPageController;
            angular.module('psApp.pages.editParkingPage')
                .controller(EditParkingPageController.controllerId, EditParkingPageController);
        })(editParkingPage = pages.editParkingPage || (pages.editParkingPage = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));
//# sourceMappingURL=editParkingPage.controller.js.map