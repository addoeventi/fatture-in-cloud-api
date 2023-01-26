import { Configuration } from "@fattureincloud/fattureincloud-ts-sdk";
import http from "axios";
import { Global } from "../../global";
import { InfoRequest } from "./info/Info-request";
import { InfoResponse } from "./info/Info-response";

export class Richiesta {

    private config: Configuration;

    constructor(config: Configuration) {
        this.config = config;
    }


    // public info(request: InfoRequest = { appId: this.appId, appKey: this.appKey }) : Promise<InfoResponse>{
    //     request.appId = request.appId || this.appId;
    //     request.appKey = request.appKey || this.appKey;
    //     return http.post(Global.ENDPOINT+"/richiesta/info", request) as Promise<InfoResponse>
    // }
}