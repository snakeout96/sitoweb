function benvenuto() {
  var testo = "Pagina caricata, stai leggendo: <b>" + document.title + "</b>"
  document.getElementById("messaggio").innerHTML = testo;
}

function testoLink(testo) {
  var element = document.getElementById("link")
  element.innerHTML = "Link: " + testo;
}

function mostraNascondi(id) {
  var blocco = document.getElementById(id);
  if (blocco.style.display == "none") {
    blocco.style.display = "block";
  } else {
    blocco.style.display = "none";
  }
}

function mostraCuriosita() {
  alert("Curiosità: il DNS funziona da più di 40 anni anche se il carico \u00e8 cresciuto di 6-7 ordini di grandezza");
}

function mostraFeedback() {
  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;
  var testo = document.getElementById("testo").value;

  if (nome == "" || cognome == "" || testo == "") {
    alert("Compila tutti i campi prima di inviare");
  } 
  else {
    var body = "nome=" + nome + "&cognome=" + cognome + "&testo=" + testo.replaceAll(" ", "+");
    var risultato = "POST /\nHost: snakeout96.github.io\nReferer: https://snakeout96.github.io/sitoweb/feedback.html\nContent-Type: application/x-www-form-urlencoded\nContent-Length: " + body.length + "\n...\n<LV>\n" + body;

    document.getElementById("risultato").innerHTML = risultato;
    document.getElementById("risultato").style.display = "block";
    document.getElementById("freccia").style.display = "block";
  }
}
