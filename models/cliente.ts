export class Cliente {
    public id: string;
    public nome: string;
    public referente: string;
    public indirizzo_via: string;
    public indirizzo_cap: string;
    public indirizzo_citta: string;
    public indirizzo_provincia: string;
    public indirizzo_extra: string;
    public paese: string;
    public paese_iso: string;
    public mail: string;
    public tel: string;
    public fax: string;
    public piva: string;
    public cf: string;
    public termini_pagamento: string;
    public pagamento_fine_mese: boolean = false;
    public cod_iva_default: number;
    public extra: string;
    public PA: boolean;
    public PA_codice: string;
}