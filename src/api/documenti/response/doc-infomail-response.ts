export class DocInfomailResponse {
    public success: boolean;
    public mail_destinatario: string ; // Indirizzo e-mail del destinatario (se presente nell'anagrafica clienti/fornitori),
    public mail_mittente: DocInfomailMail[]; // Lista degli indirizzi e-mail configurati,
    public mail_cc: string; // Indirizzo e-mail inserito in cc (se richiesto); corrisponde all'indirizzo di rdell'account Fatture in Cloud,
    public oggetto_default: string; // Oggetto predefinito utilizzato nelle e-mail,
    public messaggio_default: string; // Messaggio predefinito utilizzato nelle e-mail (secondo i modelli configurati),
    public esiste_documento: boolean; // Se "true", è presente un documento da allegare con "includi_documento" (è "false" solo se si tratta di un ddt, con cui è necessario utilizzare "invia_ddt"),
    public esiste_ddt: boolean; // Se "true", è presente un ddt collegato si può includere con "invia_ddt",
    public esiste_fa: boolean; // Se "true", è presente una fattura accompagnatoria collegata e si può includere con "invia_fa",
    public esiste_allegato: boolean; // Se "true", è presente un allegato interno e si può includere con "includi_allegato"
}

export class DocInfomailMail {
    id: number; // Codice identificativo dell'indirizzo (non ancora utilizzato),
    default: boolean; // Indica se si tratta dell'indirizzo di invio predefinito tra quelli configurati,
    mail: string; // Indirizzo e-mail di invio
}