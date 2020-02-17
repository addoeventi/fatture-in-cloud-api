import http from "axios";
import { ClientiRequest } from "./clienti/clienti-request";
import { FornitoriRequest } from "./fornitori/fornitori-request";
import { ClienteRequest } from "./clienti/cliente-request";
import { FornitoreRequest } from "./fornitori/fornitore-request";
import { Global } from "../../global";
import { Fornitore } from "../../models/fornitore";
import { Cliente } from "../../models/cliente";

export class Anagrafica {

    private appId: string;
    private appkey: string;

    constructor(appId: string, appKey: string) {
        this.appId = appId;
        this.appkey = appKey;
    }

    public clienti = {
        get(filter: ClientiRequest) {
            return http.post(Global.ENDPOINT+"/clienti/lista", { body: filter }) as Promise<Cliente[]>
        },
        create(cliente: ClienteRequest) {
            return http.post(Global.ENDPOINT+"/clienti/nuovo", { body: cliente }) as Promise<Cliente>
        },
        import() {

        },
        update(cliente: ClienteRequest) {
            return http.post(Global.ENDPOINT+"/clienti/modifica", { body: cliente }) as Promise<Cliente>
        },
        delete(cliente: ClienteRequest) {
            return http.post(Global.ENDPOINT+"/clienti/elimina", { body: cliente }) as Promise<Cliente>
        }
    }

    public fornitori = {
        get(filter: FornitoriRequest) {
            return http.post(Global.ENDPOINT+"/fornitori/lista", { body: filter }) as Promise<Fornitore[]>
        },
        create(fornitore: FornitoreRequest) {
            return http.post(Global.ENDPOINT+"/fornitori/nuovo", { body: fornitore }) as Promise<Fornitore>
        },
        import() {

        },
        update(fornitore: FornitoreRequest) {
            return http.post(Global.ENDPOINT+"/fornitori/modifica", { body: fornitore }) as Promise<Fornitore>
        },
        delete(fornitore: FornitoreRequest) {
            return http.post(Global.ENDPOINT+"/fornitori/elimina", { body: fornitore }) as Promise<Fornitore>
        }
    }

}