"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var global_1 = require("../../global");
var Anagrafica = /** @class */ (function () {
    function Anagrafica(appId, appKey) {
        this.clienti = {
            get: function (filter) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/clienti/lista", { body: filter });
            },
            create: function (cliente) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/clienti/nuovo", { body: cliente });
            },
            import: function () {
            },
            update: function (cliente) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/clienti/modifica", { body: cliente });
            },
            delete: function (cliente) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/clienti/elimina", { body: cliente });
            }
        };
        this.fornitori = {
            get: function (filter) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/fornitori/lista", { body: filter });
            },
            create: function (fornitore) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/fornitori/nuovo", { body: fornitore });
            },
            import: function () {
            },
            update: function (fornitore) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/fornitori/modifica", { body: fornitore });
            },
            delete: function (fornitore) {
                return axios_1.default.post(global_1.Global.ENDPOINT + "/fornitori/elimina", { body: fornitore });
            }
        };
        this.appId = appId;
        this.appkey = appKey;
    }
    return Anagrafica;
}());
exports.Anagrafica = Anagrafica;
