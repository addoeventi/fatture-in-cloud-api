"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var global_1 = require("../../global");
var Richiesta = /** @class */ (function () {
    function Richiesta(appId, appKey) {
        this.appId = appId;
        this.appkey = appKey;
    }
    Richiesta.prototype.info = function (request) {
        if (request === void 0) { request = { appId: this.appId, appKey: this.appkey }; }
        return axios_1.default.post(global_1.Global.ENDPOINT + "/richiesta/info", { body: request });
    };
    return Richiesta;
}());
exports.Richiesta = Richiesta;
