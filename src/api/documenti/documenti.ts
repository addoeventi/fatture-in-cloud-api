import { DocumentiRequest } from "./request/documenti-request";
import { DocumentoRequest } from "../documenti/request/documento-request";
import { IssuedDocument, IssuedDocumentsApi, IssuedDocumentType, IssuedDocumentItemsListItem, IssuedDocumentPaymentsListItem, Configuration } from "@fattureincloud/fattureincloud-ts-sdk";
import { DateTime } from "luxon";
import { toDate } from "../../utils/date.utils";

export class Documenti {

    // private appId: string;
    // private appKey: string;

    private typeMapping = {
        fatture: IssuedDocumentType.Invoice,
        proforma: IssuedDocumentType.Proforma,
        ordini: IssuedDocumentType.Order,
        preventivi: IssuedDocumentType.Quote,
        ndc: IssuedDocumentType.CreditNote,
        ricevute: IssuedDocumentType.Receipt,
        ddt: IssuedDocumentType.DeliveryNote,
        rapporti: IssuedDocumentType.WorkReport,
        ordform: IssuedDocumentType.SelfSupplierInvoice,
    };

    public fatture = this.getApiForType('fatture');
    public proforma = this.getApiForType('proforma');
    public ordini = this.getApiForType('ordini');
    public preventivi = this.getApiForType('preventivi');
    public ndc = this.getApiForType('ndc');
    public ricevute = this.getApiForType('ricevute');
    public ddt = this.getApiForType('ddt');
    public rapporti = this.getApiForType('rapporti');
    public ordform = this.getApiForType('ordform');

    private config: Configuration;

    constructor(config: Configuration) {
        this.config = config;
    }

    private documentoTo(type: keyof typeof this.typeMapping, doc: DocumentoRequest): IssuedDocument {
        const itemsList = doc.lista_articoli.map((la): IssuedDocumentItemsListItem => ({
            product_id: parseInt(la.id) || undefined,
            code: la.codice,
            name: la.nome,
            net_price: la.prezzo_netto,
            category: la.categoria,
            discount: la.sconto,
            qty: la.quantita,
            vat: la.valore_iva ? { id: la.valore_iva, description: la.descrizione } : { id: 0 },
            stock: la.magazzino,
            description: la.descrizione,
            gross_price: la.prezzo_lordo,
            measure: la.um,
            id: parseInt(la.id) || undefined,
            in_dn: la.in_ddt
        }));

        const entity = {
            id: parseInt(doc.id_cliente) || undefined,
            name: doc.nome,
            vat_number: doc.piva,
            tax_code: doc.piva,
            address_street: doc.indirizzo_via,
            address_postal_code: doc.indirizzo_cap,
            address_city: doc.indirizzo_citta,
            address_province: doc.indirizzo_provincia,
            address_extra: doc.indirizzo_extra,
            country: "Italia",
            certified_email: doc.PA_pec,
        };

        const paymentsList = doc.lista_pagamenti.map((pa): IssuedDocumentPaymentsListItem => ({
            amount: pa.importo,
            due_date: DateTime.fromJSDate(toDate(pa.data_scadenza)).toFormat('yyyy-LL-dd'),
            paid_date: DateTime.fromJSDate(toDate(pa.data_saldo)).toFormat('yyyy-LL-dd'),
            status: pa.stato,
            payment_terms: pa.termini_di_pagamento
        }));

        return {
            type: this.typeMapping[type],
            entity,
            language: {
                code: doc.liguaggio?.codice || "it",
                name: doc.liguaggio?.nome || "Italiano"
            },
            currency: {
                id: doc.valuta || "EUR",
                exchange_rate: doc.valuta_rate || "1.00000",
                symbol: doc.valuta_simbolo || "€"
            },
            items_list: itemsList,
            payments_list: paymentsList
        };
    }

    private getApiForType(type: keyof typeof this.typeMapping) {
        let self = this;
        const api = new IssuedDocumentsApi(self.config);
        return {
            get(companyId: number, request: DocumentiRequest) {
                return api.listIssuedDocuments(companyId, this.typeMapping[type], undefined, undefined, undefined, request.pagina).then(res => res.data);
                // request.appId = request.appId || self.appId;
                // request.appKey = request.appKey || self.appKey;
                // return http.post(Global.ENDPOINT + "/" + type + "/lista", request) as Promise<DocListaResponse>;
            },
            details(companyId: number, request: { appId: string, appKey: string, id: string, token: string; }) {
                return api.getIssuedDocument(companyId, parseInt(request.id)).then(res => res.data);
                // request.appId = request.appId || self.appId;
                // request.appKey = request.appKey || self.appKey;
                // return http.post(Global.ENDPOINT + "/" + type + "/dettagli", request) as Promise<DocListaResponse>;
            },
            create(companyId: number, request: DocumentoRequest) {
                return api.createIssuedDocument(companyId, {
                    data: self.documentoTo(type, request)
                }).then(res => res.data);
                // request.appId = request.appId || self.appId;
                // request.appKey = request.appKey || self.appKey;
                // return http.post(Global.ENDPOINT + "/" + type + "/nuovo", request) as Promise<{ success: boolean, new_id: number, token: string; }>;
            },
            update(companyId: number, request: DocumentoRequest) {
                const doc = self.documentoTo(type, request);
                return api.modifyIssuedDocument(companyId, doc.id, {
                    data: doc
                }).then(res => res.data);
                // request.appId = request.appId || self.appId;
                // request.appKey = request.appKey || self.appKey;
                // return http.post(Global.ENDPOINT + "/" + type + "/modifica", request) as Promise<{ success: boolean; }>;
            },
            delete(companyId: number, request: { appId: string, appKey: string, id: string, token: string; }) {
                return api.deleteIssuedDocument(companyId, parseInt(request.id)).then(res => res.data);
                // request.appId = request.appId || self.appId;
                // request.appKey = request.appKey || self.appKey;
                // return http.post(Global.ENDPOINT + "/" + type + "/elimina", request) as Promise<{ success: boolean; }>;
            },
            // info(request: { appId: string, appKey: string, anno: number; }) {
            //     request.appId = request.appId || self.appId;
            //     request.appKey = request.appKey || self.appKey;
            //     return http.post(Global.ENDPOINT + "/" + type + "/info", request) as Promise<DocInfoResponse>;
            // },
            // infoMail(request: { appId: string, appKey: string, id: string, token: string; }) {
            //     request.appId = request.appId || self.appId;
            //     request.appKey = request.appKey || self.appKey;
            //     return http.post(Global.ENDPOINT + "/" + type + "/infomail", request) as Promise<DocInfomailResponse>;
            // },
            // sendMail(request: InviaMailRequest) {
            //     request.appId = request.appId || self.appId;
            //     request.appKey = request.appKey || self.appKey;
            //     return http.post(Global.ENDPOINT + "/" + type + "/inviamail", request) as Promise<{ success: boolean; }>;
            // }
        };
    }
}