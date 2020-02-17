import http from "request-promise";
import { Global } from "../../global";
import { DocumentiRequest } from "./request/documenti-request";
import { Documento } from "../../models/documento";
import { DocInfomailResponse } from "./response/doc-infomail-response";
import { InviaMailRequest } from "./request/inviamail-request";
import { DocListaResponse } from "./response/doc-lista-response";
import { DocInfoResponse } from "./response/doc-info-response";

export class Documenti {
    private appId: string;
    private appkey: string;

    public fatture = this.getApiForType('fatture')
    public proforma = this.getApiForType('proforma')
    public ordini = this.getApiForType('ordini')
    public preventivi = this.getApiForType('preventivi')
    public ndc = this.getApiForType('ndc')
    public ricevute = this.getApiForType('ricevute')
    public ddt = this.getApiForType('ddt')
    public rapporti = this.getApiForType('rapporti')
    public ordform = this.getApiForType('ordform')

    constructor(appId: string, appKey: string) {
        this.appId = appId;
        this.appkey = appKey;
    }



    private getApiForType(type: string) {
        return {
            get(request: DocumentiRequest) {
                return http.post(Global.ENDPOINT + "/" + type + "/lista", { body: request }).promise() as Promise<DocListaResponse>
            },
            details(request: { id: string, token: string }) {
                return http.post(Global.ENDPOINT + "/" + type + "/dettagli", { body: request }).promise() as Promise<DocListaResponse>
            },
            create(request: Documento) {
                return http.post(Global.ENDPOINT + "/" + type + "/nuovo", { body: request }).promise() as Promise<{ success: boolean, new_id: number, token: string }>
            },
            update(request: Documento) {
                return http.post(Global.ENDPOINT + "/" + type + "/modifica", { body: request }).promise() as Promise<{ success: boolean }>
            },
            delete(request: { id: string, token: string }) {
                return http.post(Global.ENDPOINT + "/" + type + "/elimina", { body: request }).promise() as Promise<{ success: boolean }>
            },
            info(request: { anno: number }) {
                return http.post(Global.ENDPOINT + "/" + type + "/info", { body: request }).promise() as Promise<DocInfoResponse>
            },
            infoMail(request: { id: string, token: string }) {
                return http.post(Global.ENDPOINT + "/" + type + "/infomail", { body: request }).promise() as Promise<DocInfomailResponse>
            },
            sendMail(request: InviaMailRequest) {
                return http.post(Global.ENDPOINT + "/" + type + "/inviamail", { body: request }).promise() as Promise<{ success: boolean }>
            }
        }
    }
}