import { BasicRequest } from "../../../request/basic-request";

export class InviaMailRequest implements BasicRequest {
    public appId: string;
    public appKey: string;
    public id: string;
    public token: string;
    public mail_mittente: string;
    public mail_destinatario: string;
    public oggetto: string;
    public messaggio: string;
    public includi_documento: boolean;
    public invia_ddt: boolean;
    public invia_fa: boolean;
    public includi_allegato: boolean;
    public invia_copia: boolean;
    public allega_pdf: boolean;


}