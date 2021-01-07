# Examen JavaScript
 VCIEL - 16/01/2020
## Exercice 1
Créez une page HTML contenant un titre, un paragraphe de texte, quelques images (noms de
fichiers fictifs), un champ de saisie et un bouton « Rechercher ».
* a. Si la hauteur de l’écran est supérieure ou égale à 1200 pixels affichez le titre en bleu,
sinon affichez le titre en vert.

* b. Affichez un nouveau paragraphe en bas de la page Web : « Le nombre d’images sur
cette page est de : » et calculez et affichez automatiquement le nombre d’images.

* c. Quand l’utilisateur saisit un caractère dans le champ de saisie et clique sur le bouton
« Rechercher », affichez, à la fin de la page, le nombre d’apparitions du caractère saisi
sur l’ensemble de la page HTML sous la forme : « Le caractère "x" apparait n fois »,
où x est le caractère saisi par l’utilisateur et n est le nombre d’apparitions de ce
caractère dans la page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
        function titleColor() {
            if (screen.height >= 1200) {
                document.getElementsByTagName('h1').item(0).style.color = "blue";

            } else {
                document.getElementsByTagName('h1').item(0).style.color = "green";
            }
        }

        function calculeNombreImage() {
            let text = "Le nombre d’images sur cette page est de : " + document.images.length;
            document.getElementById("nbrImg").innerHTML = text;
        }

        function ready() {
            calculeNombreImage()
            titleColor()
        }

        function search() {
            let search = document.getElementById("search").value;
            var nb = 0;
            if (search.length == 0) return 0;
            parragraphe = document.getElementsByTagName("p");
            for (var i = 0; i < parragraphe.length; i++) {
                let text = parragraphe[i].innerText
                if (text.indexOf(search) != -1) {
                    nb++;
                }
            }
            document.getElementById("occ").innerHTML = "Le caractère \"" + search + "\" apparait " + nb + " fois";

        }
    </script>
</head>
<body onload="ready()">
<h1>Mon titre</h1>
<p>
    Mon paragraphe
</p>

<img src="https://source.unsplash.com/random" width="100px">
<img src="https://source.unsplash.com/random" width="100px">
<img src="https://source.unsplash.com/random" width="100px">
<br>
<br>
<br>
<input type="text" name="search" id="search">
<button name="search" onclick="search()">Rechercher</button>
<p id="nbrImg">
    Le nombre d’images sur
    cette page est de : 0
</p>

<p id="occ">
</p>
</body>
</html>

```


# Exercice 2
Créez une page HTML avec un formulaire d’inscription qui contient les informations
suivantes :
1. Pseudo ;
2. Adresse : Numéro, Rue, Code postal, Commune ;
3. Date de naissance ;
4. Mot de passe ;
5. Un bouton « Ajouter ».

Utilisez les types de balises qui vous semblent les plus appropriés.
Vérifiez (en utilisant des fonctions JavaScript) :

* a. Que le code postal est une valeur numérique comprise entre 1 et 95 ou 971 et 976 ou
986 et 988.
* b. Que le mot de passe contient plus de 8 caractères.
* c. Si vous voyez d’autres vérifications possibles, implémentez-les.
* d. Quand l’utilisateur clique sur le bouton « Ajouter », affichez – à la fin de la page – un
trait horizontal (balise `<hr />`), le pseudo en titre de niveau 1 (`<h1>`) et les autres
informations du formulaire en dessous. Avant d’ajouter les informations concernant
une nouvelle inscription, vérifiez que le mot de passe n’est pas identique au pseudo, à
la date de naissance ou à la concaténation des deux. Si c’est le cas, affichez un
message d’alerte.

````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exo2</title>
    <script>
        //une valeur numérique comprise entre 1 et 95 ou 971 et 976 ou 986 et 988.
        function verifierCodePostale(){
            let codePostale=document.getElementById("codepostale").value;
            let codeDOMTOM = [971, 976, 986,988];
            let assert=(codePostale>=1 && codePostale<=95)||(codeDOMTOM.includes(codePostale));
            if(!assert) alert("Le code Poste saisie:  '"+codePostale+"' n'est pas correct")
        }

        //le mot de passe contient plus de 8 caractères.
        function verificationModeDePasse(){
           let mdp=document.getElementById("motdepasse").value;

           if(mdp.length<8)alert("Le mot de passe saisie doit avoir au minimum 8 caractère ")
        }

        function ajouter(){
            var div= document.getElementById("info");
            let pseudo=document.getElementById("pseudo").value;
            div.innerHTML+="<hr/>"
            div.innerHTML+="<h1>"+pseudo+"</h1>"
        }
    </script>
</head>
<body>
<form name="formulaire" id="formulaire">

    <label>Pseudo </label>
    <input type="text" name="pseudo" id="pseudo"><br/>

    <label>Numéro </label>
    <input type="number" name="numero" id="numero"><br/>

    <label>Rue </label>
    <input type="text" name="rue" id="rue"><br/>

    <label>Code postal </label>
    <input type="text" name="codepostale" id="codepostale" onchange="verifierCodePostale()"><br/>

    <label>Commune </label>
    <input type="text" name="commune" id="commune"><br/>

    <label>Date de naissance </label>
    <input type="date" name="datenaissance" id="datenaissance"><br/>

    <label>Mot de passe </label>
    <input type="password" name="motdepasse" id="motdepasse" onchange="verificationModeDePasse()"><br/>


    <input type="button" value="Ajouter" onclick="ajouter()">

    <div id="info">

    </div>
</form>
</body>
</html>


````
