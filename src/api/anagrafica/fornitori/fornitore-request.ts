import { Fornitore } from "../../../models/fornitore";
import { BasicRequest } from "../../../request/basic-request";

export class FornitoreRequest extends Fornitore implements BasicRequest {
    appId: string;    
    appKey: string;
}