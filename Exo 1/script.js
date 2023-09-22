/*        EXERCICE FONCTION
 * Declarer trois variables a="jean" et b="paul" et result
 * Declarer une fonction checkName(qui possede 2 parametres) qui verifie si les deux noms sont identique
 * console log le result
 */

let a="Jean";  // Définition des variables
let b="Paul";
let result;

function checkName(n1,n2){ // Création de la fonction
    if(n1===n2){ // On vérifie qu'ils sont strictement identiques
        return true; // On renvoie vrai ou faux
    }else{
        return false;
    }
}
result=checkName(a,b); // On attribut au résultat la valeur renvoyé par la fonction
console.log(result);  // On retourne la valeur