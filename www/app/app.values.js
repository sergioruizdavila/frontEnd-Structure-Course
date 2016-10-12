var app;
(function (app) {
    var values;
    (function (values) {
        (function () {
            'use strict';
            var dataConfig = {
                baseUrl: 'http://localhost:3000/'
            };
            angular.module('psApp').value('dataConfig', dataConfig);
        })();
    })(values = app.values || (app.values = {}));
})(app || (app = {}));
//# sourceMappingURL=app.values.js.map