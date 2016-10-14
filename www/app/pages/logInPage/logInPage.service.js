var app;
(function (app) {
    var pages;
    (function (pages) {
        var logInPage;
        (function (logInPage) {
            'use strict';
            var LogInPageService = (function () {
                function LogInPageService() {
                }
                return LogInPageService;
            }());
            LogInPageService.serviceId = 'psApp.pages.logInPage.logInPageService';
            LogInPageService.$inject = [];
            logInPage.LogInPageService = LogInPageService;
            angular
                .module('psApp.pages.logInPage')
                .service(LogInPageService.serviceId, LogInPageService);
        })(logInPage = pages.logInPage || (pages.logInPage = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));
//# sourceMappingURL=logInPage.service.js.map