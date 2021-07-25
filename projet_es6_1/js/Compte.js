export class Compte{

    /**
     * Creates an instance of Compte.
     * @param {Titulaire} titulaire
     * @param {number} [solde=0]
     * @memberof Compte
     */
    constructor(titulaire, solde = 0){
        this.solde = solde;
        this.titulaire = titulaire;
    }
    
    crediter(montant){  
        this.solde += montant;
    }
    debiter(montant){
        this.solde -= montant;
    }
    
    afficherSolde(){
        console.log(`Le solde est de ${this.solde}`);
    }
}