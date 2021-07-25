import { Titulaire } from "./Titulaire.js";
import { Compte } from "./Compte.js";
import { CompteEpargne } from "./CompteEpargne.js";


let titulaire1 = new Titulaire();
titulaire1.nom = "Dupont";  
titulaire1.prenom = "Jean";

let titulaire2 = new Titulaire();
titulaire2.nom = "Dupont"; 
titulaire2.prenom = "Pierre";

let titulaire3 = new Titulaire();  
titulaire3.nom = "durant";
titulaire3.prenom = "Jean";

let compte1 = new Compte();
compte1.titulaire = titulaire1;
compte1.solde = 1000;
console.log(compte1);

compte1.crediter(200);
console.log(compte1);
compte1.debiter(100);
compte1.afficherSolde();

let compteEpargne1 = new CompteEpargne();
compteEpargne1.titulaire = titulaire1;
compteEpargne1.montant = 25;
//console.log(compteEpargne1);