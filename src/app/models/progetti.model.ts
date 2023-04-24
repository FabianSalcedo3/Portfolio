export class Progetti {

  constructor(public icone: string[], public titolo: string, public immagini: string[], public descrizione: string, public links: { live: string, github: string }) {
    this.icone = icone;
    this.titolo = titolo;
    this.immagini = immagini;
    this.descrizione = descrizione;
    this.links = links;
  }
}
