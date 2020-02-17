import { BasicRequest } from "../../../request/basic-request";

export class InfoRequest implements BasicRequest {
    appId: string;    
    appKey: string;
}