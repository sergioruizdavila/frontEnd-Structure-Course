'use strict';
var app;
(function (app) {
    var core;
    (function (core) {
        var models;
        (function (models) {
            var vehicle;
            (function (vehicle) {
                var Vehicle = (function () {
                    function Vehicle() {
                    }
                    Object.defineProperty(Vehicle.prototype, "Vin", {
                        get: function () {
                            return this._vin;
                        },
                        set: function (value) {
                            if (value === undefined) {
                                throw 'Please supply vehicle vin value';
                            }
                            this._vin = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Vehicle.prototype, "Model", {
                        get: function () {
                            return this._model;
                        },
                        set: function (value) {
                            if (value === undefined) {
                                throw 'Please supply vehicle model value';
                            }
                            this._model = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Vehicle.prototype, "Year", {
                        get: function () {
                            return this._year;
                        },
                        set: function (value) {
                            if (value === undefined) {
                                throw 'Please supply vehicle year value';
                            }
                            this._year = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Vehicle.prototype, "User", {
                        get: function () {
                            return this._user;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return Vehicle;
                }());
            })(vehicle = models.vehicle || (models.vehicle = {}));
        })(models = core.models || (core.models = {}));
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=vehicle.model.js.map