import http, {} from 'axios';
import { Global } from "../../global";
import { ProdottiRequest } from "./prodotti/prodotti-request";
import { Prodotto } from "../../models/prodotto";
import { ProdottoRequest } from "./prodotti/prodotto-request";
import { Configuration, ProductsApi, ListProductsResponse, Product } from "@fattureincloud/fattureincloud-ts-sdk";

export class Prodotti {

    private config: Configuration;
    private api: ProductsApi;

    constructor(config: Configuration) {
        this.config = config;
        this.api = new ProductsApi(config);
    }

    private prodottoTo(product: ProdottoRequest): Product {
        return {
            category: product.categoria,
            code: product.cod,
            default_vat: { id: product.cod_iva },
            net_cost: parseFloat(product.costo),
            description: product.desc,
            id: parseInt(product.id),
            in_stock: product.magazzino,
            stock_initial: product.giacenza_iniziale ? parseInt(product.giacenza_iniziale) : undefined,
            name: product.nome,
            notes: product.note,
            use_gross_price: product.prezzo_ivato,
            gross_price: parseFloat(product.prezzo_lordo),
            net_price: parseFloat(product.prezzo_netto),
            measure: product.um
        };
    }

    private productTo(product: Product): Prodotto {
        return {
            categoria: product.category,
            cod: product.code,
            cod_iva: product.default_vat?.id,
            costo: product.net_cost?.toString(),
            desc: product.description,
            id: product.id?.toString(),
            magazzino: product.in_stock,
            giacenza_iniziale: product.stock_initial?.toString(),
            nome: product.name,
            note: product.notes,
            prezzo_ivato: product.use_gross_price,
            prezzo_lordo: product.gross_price?.toString(),
            prezzo_netto: product.net_price?.toString(),
            um: product.measure
        };
    }

    public get(companyId: number, request: ProdottiRequest): Promise<Prodotto[]> {
        return this.api.listProducts(companyId).then(res => res.data.data.map(d => this.productTo(d)));
        // request.appId = request.appId || this.appId;
        // request.appKey = request.appKey || this.appKey;
        // return http.post(Global.ENDPOINT + "/prodotti/lista", request) as Promise<Prodotto[]>
    }

    public import() {

    }

    public create(companyId: number, prodotto: ProdottoRequest): Promise<Prodotto> {
        const product = this.prodottoTo(prodotto);
        return this.api.createProduct(companyId, { data: product }).then(res => this.productTo(res.data.data));
        // prodotto.appId = prodotto.appId || this.appId;
        // prodotto.appKey = prodotto.appKey || this.appKey;
        // return http.post(Global.ENDPOINT + "/prodotti/nuovo", prodotto) as Promise<Prodotto>;
    }

    public update(companyId: number, prodotto: ProdottoRequest): Promise<Prodotto> {
        const product = this.prodottoTo(prodotto);
        return this.api.modifyProduct(companyId, product.id, { data: product }).then(res => this.productTo(res.data.data));
        // prodotto.appId = prodotto.appId || this.appId;
        // prodotto.appKey = prodotto.appKey || this.appKey;
        // return http.post(Global.ENDPOINT + "/prodotti/modifica", prodotto) as Promise<Prodotto>;
    }

    public async delete(companyId: number, prodotto: ProdottoRequest) {
        const product = this.prodottoTo(prodotto);
        await this.api.deleteProduct(companyId, product.id)
        return prodotto;
        // prodotto.appId = prodotto.appId || this.appId;
        // prodotto.appKey = prodotto.appKey || this.appKey;
        // return http.post(Global.ENDPOINT + "/prodotti/elimina", prodotto) as Promise<Prodotto>;
    }
}