var app;
(function (app) {
    var pages;
    (function (pages) {
        var logInPage;
        (function (logInPage) {
            'use strict';
            var LogInPageController = (function () {
                function LogInPageController() {
                    this._init();
                }
                LogInPageController.prototype._init = function () {
                    this.userData = {
                        email: '',
                        password: ''
                    };
                    this._activate();
                };
                LogInPageController.prototype._activate = function () {
                    console.log('logInPage controller actived');
                };
                LogInPageController.prototype.logIn = function () {
                    console.log(this.userData);
                };
                return LogInPageController;
            }());
            LogInPageController.controllerId = 'psApp.pages.logInPage.logInPageController';
            LogInPageController.$inject = [];
            logInPage.LogInPageController = LogInPageController;
            angular.module('psApp.pages.logInPage')
                .controller(LogInPageController.controllerId, LogInPageController);
        })(logInPage = pages.logInPage || (pages.logInPage = {}));
    })(pages = app.pages || (app.pages = {}));
})(app || (app = {}));
//# sourceMappingURL=logInPage.controller.js.map