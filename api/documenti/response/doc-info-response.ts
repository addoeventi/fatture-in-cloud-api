export class DocInfoResponse {
    ddt_numero_successivo: string; // Numero suggerito per la creazione di un ddt (ottenuto come: massimo dell'anno +1),
    numerazioni: DocInfoNumerazione // Numerazioni utilizzate nell'anno specificato e relativi numeri successivi suggeriti,
    default_id_template: string; //Identificativo del template documento predefinito,
    default_ddt_id_template: string; //Identificativo del template documento predefinito,
    default_ftacc_id_template: string; //Identificativo del template documento predefinito,
    default_cod_iva: number; // Codice iva default,
    default_note: string; //Note a pié pagina predefinite,
    default_cassa_previdenziale: number; // Percentuale cassa previdenziale predefinita,
    default_rivalsa_previdenziale: number; // Percentuale rivalsa INPS predefinita,
    default_ritenuta_acconto: number; // Percentuale ritenuta d'acconto predefinita,
    default_imponibile_ritenuta: number; // Percentuale imponibile ritenuta d'acconto predefinita,
    default_altra_ritenuta: number; // Percentuale altra ritenuta predefinita,
    default_prezzi_ivati: boolean; // Indica se l'ultimo documento è stato emesso utilizzando un calcolo basato sui prezzi netti (false) o lordi (true)
}

export class DocInfoNumerazione {
    // (integer, opzionale): Numero suggerito per la creazione di un documento del tipo specificato e per la serie <serie1> (ottenuto come: massimo dell'anno +1),
    // (integer, opzionale): Numero suggerito per la creazione di un documento del tipo specificato e per la serie <serie2> (ottenuto come: massimo dell'anno +1),
    // (integer, opzionale): Numero suggerito per la creazione di un documento del tipo specificato e per la serie <serieN> (ottenuto come: massimo dell'anno +1)
}