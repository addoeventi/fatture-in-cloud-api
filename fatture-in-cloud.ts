import { Richiesta } from "./api/richiesta/richiesta";
import { Anagrafica } from "./api/anagrafica/anagrafica";
import { Prodotti } from "./api/prodotti/prodotti";
import { Documenti } from "./api/documenti/documenti";

export class FattureInCloud {

    private appId: string;
    private appKey: string;

    public richiesta: Richiesta;
    public anagrafica: Anagrafica;
    public prodotti: Prodotti;
    public documenti: Documenti;
    // public acquisti: Acquisti;
    // public corrispettivi: Corrispettivi;
    // public magazzino: Magazzino;
    // public mail: Mail;
    // public info: Info;

    constructor(appId: string, appKey: string) {
        
        this.appId = appId;
        this.appKey = appKey;
        
        this.richiesta = new Richiesta(appId, appKey);
        this.anagrafica = new Anagrafica(appId, appKey);
        this.prodotti = new Prodotti(appId, appKey);
        this.documenti = new Documenti(appId, appKey);
        // this.acquisti = new Acquisti(appId, appKey);
        // this.corrispettivi = new Corrispettivi(appId, appKey);
        // this.magazzino = new Magazzino(appId, appKey);
        // this.mail = new Mail(appId, appKey);
        // this.info = new Info(appId, appKey);
    }

}
