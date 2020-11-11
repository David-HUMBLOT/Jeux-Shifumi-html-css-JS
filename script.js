var tour = 0;
var aleatoire = mathRandomInt(1, 3);
var USer = 0; //servira à comparer invrément les parti gagner consécutive


function saisie() {
        var nom = prompt("TON PSEUDO?");
        document.getElementById("Name").innerText = nom;
        Pseudo();
}


function Pseudo(nom, bestscore) {
        this.nom = nom;
        this.bestscore = bestscore;
        alert('ton nom est : ' + this.nom);
}


//A FAIRE CREER UNE FONCTION COMPARATRICE DE LA VALEUR STOCKER ET DE LA NOUVELLE VALEUR DE VICTOIRE CONSECUTIVE;

function P() {
        document.getElementById("ACT").style.backgroundImage = "url(IMG/pierre.png)";
        User = "pierre";
        onclick = ORDI(); comparaison(); nombre();
}

function F() {
        document.getElementById("ACT").style.backgroundImage = "url(IMG/feuille.png)";
        User = "feuille";
        onclick = ORDI(); comparaison(); nombre();
}

function C() {
        document.getElementById("ACT").style.backgroundImage = "url(IMG/ciseaux.png)";
        User = "ciseaux";
        onclick = ORDI(); comparaison(); nombre();
}

function mathRandomInt(a, b) {
        if (a > b) {
                var c = a;
                a = b;
                b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
}

function ORDI() {
        var aleatoire = mathRandomInt(1, 1);
        if (aleatoire == 1) {
                document.getElementById("ImgOrdi1").style.backgroundImage = "url(IMG/pierre.png)"; IA = "pierre";
        }
        if (aleatoire == 2) {
                document.getElementById("ImgOrdi1").style.backgroundImage = "url(IMG/feuille.png)"; IA = "feuille";
        }
        if (aleatoire == 3) {
                document.getElementById("ImgOrdi1").style.backgroundImage = "url(IMG/ciseaux.png)"; IA = "ciseaux";
        }
}

function nombre() {
        if (tour == 1) {
                var nombre = 1
                document.getElementById("NBR").innerText = nombre;
        }

        if (tour == 2) {
                var nombre = 2
                document.getElementById("NBR").innerText = nombre;
        }

        if (tour == 3) {
                var nombre = 3
                document.getElementById("NBR").innerText = nombre;
        }
}

var player = 0
var ordinateur = 0

function comparaison() {

        FINAL();
        if (IA == 'pierre' && User == 'feuille' || IA == 'feuille' && User == 'ciseaux' || IA == 'ciseaux' && User == 'pierre') {


                player = player + 1;
                USERVERT();
                USERROUGE();
                IAVERT();
                IAROUGE();
                tour = tour + 1;
                document.getElementById("msg").innerText = "Manche Gagner!!";


        }
        else if (IA == 'pierre' && User == 'ciseaux' || IA == 'feuille' && User == 'pierre' || IA == 'ciseaux' && User == 'feuille') {

                ordinateur = ordinateur + 1;
                USERROUGE();
                IAVERT();
                tour = tour + 1;
                document.getElementById("msg").innerText = "Perdu...";


        }

        else {

                USERBLUE();
                IABLUE();
                tour = tour + 1;
                document.getElementById("msg").innerText = "EGALITé";


        }
        //Ici on est tjs dans la fonction mais à la sorti de la boucle

        console.log(tour);
        resettour();
}

function resettour() {
        if (tour > 3) {
                tour = 0;

                var nombre = 0
                document.getElementById("NBR").innerText = nombre;

                document.getElementById("ldr1").style.backgroundColor = "gray";
                document.getElementById("ldr4").style.backgroundColor = "gray";
                document.getElementById("ldr2").style.backgroundColor = "gray";
                document.getElementById("ldr5").style.backgroundColor = "gray";
                document.getElementById("ldr3").style.backgroundColor = "gray";
                document.getElementById("ldr6").style.backgroundColor = "gray";

                document.getElementById("ACT").style.backgroundImage = "url(IMG/interogation.jpg)";
                document.getElementById("ImgOrdi1").style.backgroundImage = "url(IMG/interogation.jpg)";




        }
}

function USERROUGE() {
        if (tour == 0) {
                document.getElementById("ldr1").style.backgroundColor = "red";
                document.getElementById("ldr4").style.backgroundColor = "green";
        } else if (tour == 1) {
                document.getElementById("ldr2").style.backgroundColor = "red";
                document.getElementById("ldr5").style.backgroundColor = "green";
        } else {
                document.getElementById("ldr3").style.backgroundColor = "red";
                document.getElementById("ldr6").style.backgroundColor = "green";

        }
}

function USERVERT() {
        if (tour == 0) {
                document.getElementById("ldr1").style.backgroundColor = "green";
                document.getElementById("ldr4").style.backgroundColor = "red";
        } else if (tour == 1) {
                document.getElementById("ldr2").style.backgroundColor = "green";
                document.getElementById("ldr5").style.backgroundColor = "red";
        } else {
                document.getElementById("ldr3").style.backgroundColor = "green";
                document.getElementById("ldr6").style.backgroundColor = "red";
        }
}

function USERBLUE() {
        if (tour == 0) {
                document.getElementById("ldr1").style.backgroundColor = "blue";
                document.getElementById("ldr4").style.backgroundColor = "blue";
        } else if (tour == 1) {
                document.getElementById("ldr2").style.backgroundColor = "blue";
                document.getElementById("ldr5").style.backgroundColor = "blue";
        } else {
                document.getElementById("ldr3").style.backgroundColor = "blue";
                document.getElementById("ldr6").style.backgroundColor = "blue";

        }
}

function IAROUGE() {
        if (tour == 0) {
                document.getElementById("ldr4").style.backgroundColor = "red";
                document.getElementById("ldr1").style.backgroundColor = "green";

        } else if (tour == 1) {
                document.getElementById("ldr5").style.backgroundColor = "red";
                document.getElementById("ldr2").style.backgroundColor = "green";
        } else {
                document.getElementById("ldr6").style.backgroundColor = "red";
                document.getElementById("ldr3").style.backgroundColor = "green";
        }
}

function IAVERT() {
        if (tour == 0) {
                document.getElementById("ldr4").style.backgroundColor = "green";
                document.getElementById("ldr1").style.backgroundColor = "red";
        } else if (tour == 1) {
                document.getElementById("ldr5").style.backgroundColor = "green";
                document.getElementById("ldr2").style.backgroundColor = "red";
        } else {
                document.getElementById("ldr6").style.backgroundColor = "green";
                document.getElementById("ldr3").style.backgroundColor = "red";
        }
}

function IABLUE() {
        if (tour == 0) {
                document.getElementById("ldr4").style.backgroundColor = "blue";
                document.getElementById("ldr1").style.backgroundColor = "blue";

        } else if (tour == 1) {
                document.getElementById("ldr5").style.backgroundColor = "blue";
                document.getElementById("ldr2").style.backgroundColor = "blue";
        } else {
                document.getElementById("ldr6").style.backgroundColor = "blue";
                document.getElementById("ldr3").style.backgroundColor = "blue";
        }
}

function couleurVRP1win() {
        document.getElementById("ldr1").style.backgroundColor = "green";
        document.getElementById("ldr4").style.backgroundColor = "red";
}

function couleurVRP1lose() {
        document.getElementById("ldr1").style.backgroundColor = "red";
        document.getElementById("ldr4").style.backgroundColor = "green";
}

function couleurEgaleP1() {
        document.getElementById("ldr1").style.backgroundColor = "blue";
        document.getElementById("ldr4").style.backgroundColor = "blue";
}
function couleurVRP2win() {
        document.getElementById("ldr2").style.backgroundColor = "green";
        document.getElementById("ldr5").style.backgroundColor = "red";
}

function couleurVRP2lose() {
        document.getElementById("ldr2").style.backgroundColor = "red";
        document.getElementById("ldr5").style.backgroundColor = "green";
}

function couleurEgaleP2() {
        document.getElementById("ldr2").style.backgroundColor = "blue";
        document.getElementById("ldr5").style.backgroundColor = "blue";
}

function couleurVR3win() {
        document.getElementById("ldr3").style.backgroundColor = "green";
        document.getElementById("ldr6").style.backgroundColor = "red";
}

function couleurVRP3lose() {
        document.getElementById("ldr3").style.backgroundColor = "red";
        document.getElementById("ldr6").style.backgroundColor = "green";
}

function couleurEgaleP3() {
        document.getElementById("ldr3").style.backgroundColor = "blue";
        document.getElementById("ldr6").style.backgroundColor = "blue";
}

function FINAL() {
        if (tour == 3 && player < ordinateur) {
                window.alert("TU AS PERDU LA PARTI ET TES VICTOIRES SUCCESIVES OH ZUUT");
                USer = USer - USer;
                document.getElementById("suitevct").innerText = USer;

        }
        else if (tour == 3 && player > ordinateur) {
                window.alert("TU AS GAGNER LA PARTI!!!")
                USer = USer + 1;
                document.getElementById("suitevct").innerText = USer;
        }

        else if (tour == 3 && player == ordinateur) {
                window.alert("VOUS ETES A EGALITER");
                USer = USer + 1;
                document.getElementById("suitevct").innerText = USer;
        }

        if (tour == 3) {
                player = 0;
                ordinateur = 0;
        }


}








