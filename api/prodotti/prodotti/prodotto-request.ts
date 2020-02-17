import { Prodotto } from "../../../models/prodotto";
import { BasicRequest } from "../../../request/basic-request";

export class ProdottoRequest extends Prodotto implements BasicRequest {
    appId: string;    
    appKey: string;
}