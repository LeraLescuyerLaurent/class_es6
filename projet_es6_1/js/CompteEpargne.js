import { Compte } from "./Compte.js";
export class CompteEpargne extends Compte {

    constructor(titulaire, montant = 50, taux = 0.005, rythme = 5000) {
        super(titulaire, montant);
        this.taux = taux;
        this.rythme = rythme;

        // interet = montant * taux * rythme
        setInterval(() => {
            this.solde *= 1 + this.taux;
            // super.afficherSolde();
        }, this.rythme);
    }


}