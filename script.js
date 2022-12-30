function tomar(){
  var textCifrar = document.getElementById("input-encriptar").value;
  return textCifrar;
}

function encriptador() {
  var textCifrar = tomar();
  var cifrador;
  cifrador = textCifrar 
  .replace(/e/g, "enter")
  .replace(/o/g, "ober")
  .replace(/i/g, "imes")
  .replace(/a/g, "ai")
  .replace(/u/g, "ufat");

  console.log(tomar());

  document.getElementById("eco").style.display = "none";
  document.getElementById("descripcion-negritas").style.display = "none";
  document.getElementById("input-copiar").innerHTML = cifrador;
  document.getElementById("input-copiar").style.padding = "55px";
  document.getElementById("input-copiar").style.color = "#0A3871";
  document.getElementById("input-copiar").style.fontFamily = "Inter";
  document.getElementById("input-copiar").style.fontStyle = "Normal";
  document.getElementById("input-copiar").style.fontSize = "24px";
  document.getElementById("botencopy").style.display = "show";
  document.getElementById("botencopy").style.display = "inherit";
}

function desencriptador() {
  var cifrar = document.getElementById("input-encriptar").value;
  var cifrador = cifrar.replace(/enter/igm, "e");
  var cifrador = cifrador.replace(/ober/igm, "o");
  var cifrador = cifrador.replace(/imes/igm, "i");
  var cifrador = cifrador.replace(/ai/igm, "a");
  var cifrador = cifrador.replace(/ufat/igm, "u");

  document.getElementById("eco").style.display = "none";
  document.getElementById("descripcion-negritas").style.display = "none";
  document.getElementById("input-copiar").innerHTML = cifrador;
  document.getElementById("input-copiar").style.padding = "55px";
  document.getElementById("input-copiar").style.color = "#0A3871";
  document.getElementById("input-copiar").style.fontFamily = "Inter";
  document.getElementById("input-copiar").style.fontStyle = "Normal";
  document.getElementById("input-copiar").style.fontSize = "24px";
  document.getElementById("botencopy").style.display = "show";
  document.getElementById("botencopy").style.display = "inherit";
}

function copiar(){
    var copyText = document.getElementById("input-copiar");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}