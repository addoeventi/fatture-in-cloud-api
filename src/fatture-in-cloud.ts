import { Richiesta } from "./api/richiesta/richiesta";
import { Anagrafica } from "./api/anagrafica/anagrafica";
import { Prodotti } from "./api/prodotti/prodotti";
import { Documenti } from "./api/documenti/documenti";
import { Configuration } from "@fattureincloud/fattureincloud-ts-sdk";

export class FattureInCloud {

    private apiConfig: Configuration;
    
    public richiesta: Richiesta;
    public anagrafica: Anagrafica;
    public prodotti: Prodotti;
    public documenti: Documenti;
    // public acquisti: Acquisti;
    // public corrispettivi: Corrispettivi;
    // public magazzino: Magazzino;
    // public mail: Mail;
    // public info: Info;

    constructor(config: Configuration) {
        this.apiConfig = config;
        this.richiesta = new Richiesta(this.apiConfig);
        this.anagrafica = new Anagrafica(this.apiConfig);
        this.prodotti = new Prodotti(this.apiConfig);
        this.documenti = new Documenti(this.apiConfig);
        // this.acquisti = new Acquisti(appId, appKey);
        // this.corrispettivi = new Corrispettivi(appId, appKey);
        // this.magazzino = new Magazzino(appId, appKey);
        // this.mail = new Mail(appId, appKey);
        // this.info = new Info(appId, appKey);
    }

}
