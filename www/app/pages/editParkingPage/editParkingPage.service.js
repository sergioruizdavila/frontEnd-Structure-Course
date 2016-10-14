var app;
(function (app) {
    var pages;
    (function (pages) {
        var editParkingPage;
        (function (editParkingPage) {
            'use strict';
            var EditParkingPageService = (function () {
                function EditParkingPageService(restApi) {
                    this.restApi = restApi;
                }
                EditParkingPageService.prototype.getVehicles = function () {
                };
                EditParkingPageService.prototype.getVehicleByUserId = function (userEmail, userPassword) {
                    var promise;
                    promise = this.restApi.queryObject({ url: 'users/3/vehicles' })
                        .$promise.then(function (response) {
                        return response;
                    })
                        .catch(function () {
                        return 'Error';
                    });
                    return promise;
                };
                return EditParkingPageService;
            }());
            EditParkingPageService.serviceId = 'psApp.pages.editParkingPage.editParkingPageService';
            EditParkingPageService.$inject = [
                'psApp.core.restApi.restApiService'
            ];
            editParkingPage.EditParkingPageService = EditParkingPageService;
            angular
                .module('psApp.pages.editParkingPage')
                .service(EditParkingPageService.serviceId, EditParkingPageService);
        })(editParkingPage = pages.editParkingPage || (pages.editParkingPage = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));
//# sourceMappingURL=editParkingPage.service.js.map