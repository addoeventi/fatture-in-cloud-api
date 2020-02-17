"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var global_1 = require("../../global");
var Prodotti = /** @class */ (function () {
    function Prodotti(appId, appKey) {
        this.appId = appId;
        this.appkey = appKey;
    }
    Prodotti.prototype.get = function (request) {
        return axios_1.default.post(global_1.Global.ENDPOINT + "/prodotti/lista", { body: request });
    };
    Prodotti.prototype.import = function () {
    };
    Prodotti.prototype.create = function (prodotto) {
        return axios_1.default.post(global_1.Global.ENDPOINT + "/prodotti/nuovo", { body: prodotto });
    };
    Prodotti.prototype.update = function (prodotto) {
        return axios_1.default.post(global_1.Global.ENDPOINT + "/prodotti/modifica", { body: prodotto });
    };
    Prodotti.prototype.delete = function (prodotto) {
        return axios_1.default.post(global_1.Global.ENDPOINT + "/prodotti/elimina", { body: prodotto });
    };
    return Prodotti;
}());
exports.Prodotti = Prodotti;
