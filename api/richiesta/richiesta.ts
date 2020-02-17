import http from "axios";
import { Global } from "../../global";
import { InfoRequest } from "./info/Info-request";
import { InfoResponse } from "./info/Info-response";

export class Richiesta {

    private appId: string;
    private appkey: string;

    constructor(appId: string, appKey: string) {
        this.appId = appId;
        this.appkey = appKey;
    }

    public info(request: InfoRequest = { appId: this.appId, appKey: this.appkey }) : Promise<InfoResponse>{
        return http.post(Global.ENDPOINT+"/richiesta/info", { body: request }) as Promise<InfoResponse>
    }
}