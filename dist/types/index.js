"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OppStatus = exports.DocType = void 0;
var DocType;
(function (DocType) {
    DocType["Forecast"] = "forecast";
    DocType["Synopsis"] = "synopsis";
})(DocType || (exports.DocType = DocType = {}));
var OppStatus;
(function (OppStatus) {
    OppStatus["Forecasted"] = "forecasted";
    OppStatus["Posted"] = "posted";
})(OppStatus || (exports.OppStatus = OppStatus = {}));
