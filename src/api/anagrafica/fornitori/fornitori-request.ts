import { BasicRequest } from "../../../request/basic-request";

export class FornitoriRequest implements BasicRequest {
    appId: string;
    appKey: string;
    public filtro: string;
    public id: string;
    public nome: string;
    public cf: string;
    public piva: string;
    public pagina: number;
}