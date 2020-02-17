"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var richiesta_1 = require("./api/richiesta/richiesta");
var anagrafica_1 = require("./api/anagrafica/anagrafica");
var prodotti_1 = require("./api/prodotti/prodotti");
var documenti_1 = require("./api/documenti/documenti");
var FattureInCloud = /** @class */ (function () {
    // public acquisti: Acquisti;
    // public corrispettivi: Corrispettivi;
    // public magazzino: Magazzino;
    // public mail: Mail;
    // public info: Info;
    function FattureInCloud(appId, appKey) {
        this.appId = appId;
        this.appKey = appKey;
        this.richiesta = new richiesta_1.Richiesta(appId, appKey);
        this.anagrafica = new anagrafica_1.Anagrafica(appId, appKey);
        this.prodotti = new prodotti_1.Prodotti(appId, appKey);
        this.documenti = new documenti_1.Documenti(appId, appKey);
        // this.acquisti = new Acquisti(appId, appKey);
        // this.corrispettivi = new Corrispettivi(appId, appKey);
        // this.magazzino = new Magazzino(appId, appKey);
        // this.mail = new Mail(appId, appKey);
        // this.info = new Info(appId, appKey);
    }
    return FattureInCloud;
}());
exports.FattureInCloud = FattureInCloud;
