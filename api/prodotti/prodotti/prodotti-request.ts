import { BasicRequest } from "../../../request/basic-request";

export class ProdottiRequest implements BasicRequest {
    appId: string;
    appKey: string;
    public filtro: string;
    public id: string;
    public nome: string;
    public cod: string;
    public desc: string;
    public categoria: string;
    public pagina: number;
}