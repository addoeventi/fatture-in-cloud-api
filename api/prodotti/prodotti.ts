import http from "axios";
import { Global } from "../../global";
import { ProdottiRequest } from "./prodotti/prodotti-request";
import { Prodotto } from "../../models/prodotto";
import { ProdottoRequest } from "./prodotti/prodotto-request";

export class Prodotti {
    
    private appId: string;
    private appkey: string;

    constructor(appId: string, appKey: string) {
        this.appId = appId;
        this.appkey = appKey;
    }

    public get(request: ProdottiRequest) : Promise<Prodotto[]>{
        return http.post(Global.ENDPOINT+"/prodotti/lista", { body: request }) as Promise<Prodotto[]>
    }

    public import(){
       
    }

    public create(prodotto: ProdottoRequest) : Promise<Prodotto>{
        return http.post(Global.ENDPOINT+"/prodotti/nuovo", { body: prodotto }) as Promise<Prodotto>
    }

    public update(prodotto: ProdottoRequest) : Promise<Prodotto>{
        return http.post(Global.ENDPOINT+"/prodotti/modifica", { body: prodotto }) as Promise<Prodotto>
    }

    public delete(prodotto: ProdottoRequest) : Promise<Prodotto>{
        return http.post(Global.ENDPOINT+"/prodotti/elimina", { body: prodotto }) as Promise<Prodotto>
    }
}