"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var global_1 = require("../../global");
var Documenti = /** @class */ (function () {
    function Documenti(appId, appKey) {
        this.fatture = this.getApiForType('fatture');
        this.proforma = this.getApiForType('proforma');
        this.ordini = this.getApiForType('ordini');
        this.preventivi = this.getApiForType('preventivi');
        this.ndc = this.getApiForType('ndc');
        this.ricevute = this.getApiForType('ricevute');
        this.ddt = this.getApiForType('ddt');
        this.rapporti = this.getApiForType('rapporti');
        this.ordform = this.getApiForType('ordform');
        this.appId = appId;
        this.appkey = appKey;
    }
    Documenti.prototype.getApiForType = function (type) {
        return {
            get: function (request) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/" + type + "/lista", { body: request });
            },
            details: function (request) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/" + type + "/dettagli", { body: request });
            },
            create: function (request) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/" + type + "/nuovo", { body: request });
            },
            update: function (request) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/" + type + "/modifica", { body: request });
            },
            delete: function (request) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/" + type + "/elimina", { body: request });
            },
            info: function (request) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/" + type + "/info", { body: request });
            },
            infoMail: function (request) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/" + type + "/infomail", { body: request });
            },
            sendMail: function (request) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/" + type + "/inviamail", { body: request });
            }
        };
    };
    return Documenti;
}());
exports.Documenti = Documenti;
