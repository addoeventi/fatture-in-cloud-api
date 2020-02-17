export class DocListaResponse {
    success: boolean
    lista_documenti: DocLight[];
    pagina_corrente: number; // Numero della pagina restituita,
    numero_pagine: number; // Numero di pagine totali,
    numero_risultati: number; // Numero di risultati totali (di tutte le pagine),
    risultati_per_pagina: number; // Numero massimo di risultati presenti in ogni pagina
}

export class DocLight {
    id: string; // Identificativo univoco del documento (cambia a seguito di una modifica del documento),
    token: string; // Identificativo permanente del documento (rimane lo stesso anche a seguito di modiifche),
    tipo: string; // Tipologia del documento = ['fatture' o 'proforma' o 'ordini' o 'preventivi' o 'ndc' o 'ddt' o 'rapporti' o 'ordforn'],
    id_cliente: string; // Identificativo univoco del cliente (se nullo, il cliente non è presente nell'anagrafica) [solo con tipo!="ordforn"],
    id_fornitore: string; // Identificativo univoco del fornitore (se nullo, il fornitore non è presente nell'anagrafica) [solo con tipo="ordforn"],
    nome: string; // Nome o ragione sociale del cliente/fornitore,
    numero: string; // Numero (e serie) del documento,
    data: Date; // Data di emissione del documento,
    importo_netto: number; // Importo netto del documento (competenze),
    importo_totale: number; // Importo lordo del documento (totale da pagare),
    valuta: string; // Valuta del documento e degli importi indicati,
    valuta_cambio: number; // Tasso di cambio EUR/{valuta},
    prossima_scadenza: Date; // [Non presente in preventivi e ddt] Indica la scadenza del prossimo pagamento (vale 00/00/0000 nel caso in cui tutti i pagamenti siano saldati),
    ddt: string; // [Solo se tipo!=ndc] Indica la presenza di un DDT incluso nel documento (per i ddt è sempre true),
    ftacc: string; // [Solo se tipo=fatture] Indica la presenza di una fattura accompagnatoria inclusa nel documento,
    oggetto_visibile: string; // [Solo se filtrato per oggetto] Oggetto mostrato sul documento,
    oggetto_interno: string; // [Solo se filtrato per oggetto] Oggetto (per organizzazione interna),
    link_doc: string; // [Solo se tipo!=ddt] Link al documento in formato PDF,
    ddt_numero: string; // Numero del DDT [solo se tipo=ddt],
    ddt_data: Date; // Data del DDT,
    bloccato: boolean; // [Se presente, vale sempre "true"] Indica che il documento è bloccato e non può essere modificato o eliminato,
    PA: boolean; // [Solo per fatture e ndc elettroniche, vale sempre "true"] Indica che il documento è nel formato FatturaPA,
    PA_tipo_cliente: string; // [Solo se PA=true] Indica la tipologia del cliente: Pubblica Amministrazione ("PA") oppure privato ("B2B") = ['PA' o 'B2B']
}