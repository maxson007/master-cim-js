/**
 *  Ecrivez un programme en JavaScript qui demande à
 *  l’utilisateur une valeur entre 1 et 100 et qui affiche soit
 *  la valeur si elle est correcte (entre 1 et 100), soit un
 *  message d’erreur si la valeur n’est pas correcte.
 */

let value = prompt("Entrez une valeur entre 1 et 100");

if(value<1 || value>100) {
    alert('Erreur - Vous devez entrer une valeur comprise entre 1 et 100');
} else {
    alert(`La valeur ${value} est corecte`);
}

