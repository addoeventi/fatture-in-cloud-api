import { BasicRequest } from "../../../request/basic-request";
import { Documento } from "../../../models/documento";

export class DocumentoRequest extends Documento implements BasicRequest {
    appId?: string;    
    appKey?: string;


}