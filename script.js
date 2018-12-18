function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

nstyle = 0

function mouv() {
    if (nstyle == 1) { 
        document.getElementById("style").href = "styleS.css";
        setCookie("perso", "leonard", 365);
        nstyle = 0; }
    else { 
        document.getElementById("style").href = "styleL.css"; 
        setCookie("perso", "sheldon", 365);
        nstyle = 1; }
}

function game(monChoix) {
    var choixIA = Math.floor(Math.random() * 5);
    document.getElementById("resultatOrdi").innerHTML = '<img src="images/choix' + choixIA + '.png"  alt="Le choix de l\'ordinateur"></img>';
    document.getElementById("resultatMoi").innerHTML = '<img src="images/choix' + monChoix + '.png"  alt="Votre choix"></img>';
    
    

    if ((monChoix == 0) && (choixIA == 1) || (monChoix == 0) && (choixIA == 4) || (monChoix == 1) && (choixIA == 2) || (monChoix == 1) && (choixIA == 3) || (monChoix == 2) && (choixIA == 0) || (monChoix == 2) && (choixIA == 4) || (monChoix == 3) && (choixIA == 0) || (monChoix == 3) && (choixIA == 2) || (monChoix == 4) && (choixIA == 1) || (monChoix == 4) && (choixIA == 3)) {
        resultat("perdu");
    }
    else if ((monChoix == 0) && (choixIA == 2) || (monChoix == 0) && (choixIA == 3) || (monChoix == 1) && (choixIA == 0) || (monChoix == 1) && (choixIA == 4) || (monChoix == 2) && (choixIA == 1) || (monChoix == 2) && (choixIA == 3) || (monChoix == 3) && (choixIA == 1) || (monChoix == 3) && (choixIA == 4) || (monChoix == 4) && (choixIA == 0) || (monChoix == 4) && (choixIA == 2)) {
        resultat("gagné");
    }
    else { resultat("Egalité") }
}


function resultat(a) {
    if (a == "perdu") {
        document.getElementById("result").innerHTML = "perdu";
        document.getElementById("result").style = "display:block; color:red; font-size:48px; border: 5px solid red;";
       
        vieia++;
    }
    else if (a == "gagné") {
        document.getElementById("result").innerHTML = "gagné";
        document.getElementById("result").style = "color:green; font-size:48px; border: 5px solid green;";
       

        viejoueur++;
    }
    else {
        document.getElementById("result").innerHTML = "Egalité";
        document.getElementById("result").style = "color:blue; font-size:48px; border: 5px solid blue;";
       
    }

    setTimeout(
        function () {
            document.getElementById("result").style = "none";
            document.getElementById("resultatMoi").innerHTML = '';
            document.getElementById("resultatOrdi").innerHTML = '';
            document.getElementById("result").innerHTML ='<img src="images/logo_bazinga.png" alt="Logo Bazinga!!!!" class="logoB"></img>';
           
        }, 3000);

    document.getElementById("viejoueur").innerHTML = viejoueur;
    document.getElementById("vieia").innerHTML = vieia;

    if (viejoueur == 5 || vieia == 5) {

        if (viejoueur == 5) {
            document.getElementById("result").innerHTML = "Bazinga !!!!";
            
        }
        else {
            document.getElementById("result").innerHTML = "Perdu!";
           

        }

        setTimeout(
            function () {
                document.getElementById("choixIA").innerHTML = '<img height= "250px" src="images/sheldon.png" name="choix"  alt="Choisissez bien !"></img>';
                document.getElementById("monChoix").innerHTML = '<img height= "250px"" src="images/leonard.png" name="choix"  alt="Choisissez bien ! "></img>';
            }, 100000);

        viejoueur = 0;
        vieia = 0;

        document.getElementById("viejoueur").innerHTML = viejoueur;
        document.getElementById("vieia").innerHTML = vieia;

        document.getElementById("main").innerHTML = '<div id="rejouer" onclick="rejouer()"> Rejouer? </div> ';
    }


}

var viejoueur = 0;
var vieia = 0;

function rejouer() {
    location.reload();

}

if(getCookie("perso") == "leonard"){
    nstyle = 1
    mouv();
}else if(getCookie("perso") == "sheldon"){
    nstyle = 0
    mouv()
}