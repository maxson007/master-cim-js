/**
 * Calculez et affichez la factorielle de n où la valeur de n est donnée par l’utilisateur :
 */


let value = prompt("Entrez une valeur entre 1 et 100");
let n=parseInt(value);
let result=1;
while(n>0){
   result*=n;
   n--;
}
alert(`Factorielle de ${value} est ${result}`);
