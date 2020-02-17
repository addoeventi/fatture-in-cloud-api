import http from "axios";
import { Global } from "../../global";
import { DocumentiRequest } from "./request/documenti-request";
import { DocumentoRequest } from "../documenti/request/documento-request";
import { DocInfomailResponse } from "./response/doc-infomail-response";
import { InviaMailRequest } from "./request/inviamail-request";
import { DocListaResponse } from "./response/doc-lista-response";
import { DocInfoResponse } from "./response/doc-info-response";

export class Documenti {

    private appId: string;
    private appKey: string;

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
        this.appKey = appKey;
    }

    private getApiForType(type: string) {
        let self = this;
        return {
            get(request: DocumentiRequest) {
                request.appId = request.appId || self.appId;
                request.appKey = request.appKey || self.appKey;
                return http.post(Global.ENDPOINT + "/" + type + "/lista", request) as Promise<DocListaResponse>
            },
            details(request: { appId: string, appKey: string, id: string, token: string }) {
                request.appId = request.appId || self.appId;
                request.appKey = request.appKey || self.appKey;
                return http.post(Global.ENDPOINT + "/" + type + "/dettagli", request) as Promise<DocListaResponse>
            },
            create(request: DocumentoRequest) {
                request.appId = request.appId || self.appId;
                request.appKey = request.appKey || self.appKey;
                return http.post(Global.ENDPOINT + "/" + type + "/nuovo", request) as Promise<{ success: boolean, new_id: number, token: string }>
            },
            update(request: DocumentoRequest) {
                request.appId = request.appId || self.appId;
                request.appKey = request.appKey || self.appKey;
                return http.post(Global.ENDPOINT + "/" + type + "/modifica", request) as Promise<{ success: boolean }>
            },
            delete(request: { appId: string, appKey: string, id: string, token: string }) {
                request.appId = request.appId || self.appId;
                request.appKey = request.appKey || self.appKey;
                return http.post(Global.ENDPOINT + "/" + type + "/elimina", request) as Promise<{ success: boolean }>
            },
            info(request: { appId: string, appKey: string, anno: number }) {
                request.appId = request.appId || self.appId;
                request.appKey = request.appKey || self.appKey;
                return http.post(Global.ENDPOINT + "/" + type + "/info", request) as Promise<DocInfoResponse>
            },
            infoMail(request: { appId: string, appKey: string, id: string, token: string }) {
                request.appId = request.appId || self.appId;
                request.appKey = request.appKey || self.appKey;
                return http.post(Global.ENDPOINT + "/" + type + "/infomail", request) as Promise<DocInfomailResponse>
            },
            sendMail(request: InviaMailRequest) {
                request.appId = request.appId || self.appId;
                request.appKey = request.appKey || self.appKey;
                return http.post(Global.ENDPOINT + "/" + type + "/inviamail", request) as Promise<{ success: boolean }>
            }
        }
    }
}