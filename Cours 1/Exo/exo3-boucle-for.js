/**
 * Calculez et affichez la factorielle de n où la valeur de n est donnée par l’utilisateur :
 */


let value = prompt("Entrez un nombre pour calculez son factorielle");
let n=parseInt(value);
if (isNaN(n)) {
    alert("Vous devez saissir un nombre");
} else {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    alert(`Factorielle de ${value} est ${result}`);
}
