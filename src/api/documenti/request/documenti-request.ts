import { BasicRequest } from "../../../request/basic-request";

export class DocumentiRequest implements BasicRequest {
    public appId?: string;
    public appKey?: string;
    public anno: string;
    public data_inizio: string;
    public data_fine: string;
    public cliente: string;
    public fornitore: string;
    public id_cliente: string;
    public id_fornitore: string;
    public saldato: string;
    public oggetto: string;
    public ogni_ddt: string;
    public PA: boolean;
    public PA_tipo_cliente: string;
    public pagina: number;
}