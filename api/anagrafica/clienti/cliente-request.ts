import { BasicRequest } from "../../../request/basic-request";
import { Cliente } from "../../../models/cliente";

export class ClienteRequest extends Cliente implements BasicRequest {
    appId: string;    
    appKey: string;
}