/**
 * Calculez et affichez la factorielle de n où la valeur de n est donnée par l’utilisateur :
 */


let value = prompt("Entrez une valeur entre 1 et 100");
let n=parseInt(value);
let result=1;
for (let i=1;i<=n;i++){
    result*=i;
}
alert(`Factorielle de ${value} est ${result}`);
