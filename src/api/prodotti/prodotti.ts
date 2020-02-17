import http from "axios";
import { Global } from "../../global";
import { ProdottiRequest } from "./prodotti/prodotti-request";
import { Prodotto } from "../../models/prodotto";
import { ProdottoRequest } from "./prodotti/prodotto-request";

export class Prodotti {

    private appId: string;
    private appKey: string;

    constructor(appId: string, appKey: string) {
        this.appId = appId;
        this.appKey = appKey;
    }

    public get(request: ProdottiRequest): Promise<Prodotto[]> {
        request.appId = request.appId || this.appId;
        request.appKey = request.appKey || this.appKey;
        return http.post(Global.ENDPOINT + "/prodotti/lista", request) as Promise<Prodotto[]>
    }

    public import() {

    }

    public create(prodotto: ProdottoRequest): Promise<Prodotto> {
        prodotto.appId = prodotto.appId || this.appId;
        prodotto.appKey = prodotto.appKey || this.appKey;
        return http.post(Global.ENDPOINT + "/prodotti/nuovo", prodotto) as Promise<Prodotto>
    }

    public update(prodotto: ProdottoRequest): Promise<Prodotto> {
        prodotto.appId = prodotto.appId || this.appId;
        prodotto.appKey = prodotto.appKey || this.appKey;
        return http.post(Global.ENDPOINT + "/prodotti/modifica", prodotto) as Promise<Prodotto>
    }

    public delete(prodotto: ProdottoRequest): Promise<Prodotto> {
        prodotto.appId = prodotto.appId || this.appId;
        prodotto.appKey = prodotto.appKey || this.appKey;
        return http.post(Global.ENDPOINT + "/prodotti/elimina", prodotto) as Promise<Prodotto>
    }
}