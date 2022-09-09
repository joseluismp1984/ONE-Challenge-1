/*-----------------------------------------------*/
const textoInicial = document.getElementById("main-input");
const botonEncriptar = document.getElementById("main-botom-encriptar");
const botonDesencriptar = document.getElementById("main-botom-desencriptar");
const botonCopiar = document.getElementById("boton-copiar");

/*-----------------------------------------------*/
const cuerpo = document.querySelector("body");
const principal = document.querySelector("#main");
const entrada = document.querySelector("#main-input");
const aviso = document.querySelector("#main-alert");
const botones = document.querySelector("#main-botom");
const mensaje = document.querySelector("#main-message");
const muneco = document.querySelector("#muneco");
/*-----------------------------------------------*/
/*-----------------------------------------------*/
/*-----------------------------------------------*/
document.getElementById("texto-encriptado").style.display = "none";
document.getElementById("boton-copiar").style.display = "none";

/*----------------------------------------------------------------*/

let letras = [];
let textoFinal = "";
let textoEncriptado;
let valido;

function separarLetras() {
  let index = 0;
  while (index < textoInicial.value.length) {
    letras[index] = textoInicial.value[index];
    index++;
  }
}

function encriptarMensaje() {
  let index = 0;
  while (index < letras.length) {
    if (letras[index] == "a") {
      letras[index] = "ai";
    }
    if (letras[index] == "e") {
      letras[index] = "enter";
    }
    if (letras[index] == "i") {
      letras[index] = "imes";
    }
    if (letras[index] == "o") {
      letras[index] = "ober";
    }
    if (letras[index] == "u") {
      letras[index] = "ufat";
    }
    index++;
  }
}

function desencriptarMensaje() {
  let index = 0;
  while (index < letras.length) {
    if (letras[index] == "a") {
      letras[index] = "a";
      letras.splice(index + 1, 1);
    }
    if (letras[index] == "e") {
      letras[index] = "e";
      letras.splice(index + 1, 4);
    }
    if (letras[index] == "i") {
      letras[index] = "i";
      letras.splice(index + 1, 3);
    }
    if (letras[index] == "o") {
      letras[index] = "o";
      letras.splice(index + 1, 3);
    }
    if (letras[index] == "u") {
      letras[index] = "u";
      letras.splice(index + 1, 3);
    }
    index++;
  }
}

function unirMensaje() {
  let index = 0;
  while (index < letras.length) {
    textoFinal = textoFinal + letras[index];
    index++;
  }
}

function mostrar() {
  document.getElementById("main-input").value = "";
  muneco.className = "muneco off-muneco";
  document.getElementById("main-message-cont").style.display = "none";
  document.getElementById("texto-encriptado").style.display = "block";
  document.getElementById("boton-copiar").style.display = "block";
  document.getElementById("texto-encriptado").innerHTML = textoFinal;
}

function limpiar() {
  letras = [];
  textoFinal = "";
  textoEncriptado = "";
}

function validar() {
  valido = /[^a-z \s]/.test(textoInicial.value);
  return valido;
}

function cambiarEstilo() {
  cuerpo.className = "body-encriptado";
  principal.className = "main main-encriptado";
  entrada.className = "main-input main-input-encriptado";
  aviso.className = "main-alert main-alert-encriptado";
  botones.className = "main-botom main-botom-encriptado";
  mensaje.className = "main-message main-message-encriptado";
}

function regresarEstilo() {
  cuerpo.className = "";
  principal.className = "main";
  entrada.className = "main-input";
  aviso.className = "main-alert";
  botones.className = "main-botom";
  mensaje.className = "main-message";
  muneco.className = "muneco on-muneco";
  document.getElementById("boton-copiar").style.display = "none";
  document.getElementById("texto-encriptado").style.display = "none";
  document.getElementById("main-message-cont").style.display = "flex";
}

/*======================================================================*/
function encriptar() {
  if (textoInicial.value == "") {
    alert("No Ha Escrito Nada");
  } else {
    validar();
    if (valido) {
      alert("¡Solo letras minusculas!");
    } else {
      limpiar();
      separarLetras();
      encriptarMensaje();
      unirMensaje();
      mostrar();
      cambiarEstilo();
    }
  }
}

botonEncriptar.onclick = encriptar;
/*======================================================================*/
function copiar() {
  textoEncriptado = document.getElementById("texto-encriptado");
  navigator.clipboard.writeText(textoEncriptado.value);
  alert("¡Ha copiado el texto!");
  regresarEstilo();
}

botonCopiar.onclick = copiar;
/*======================================================================*/
function desencriptar() {
  if (textoInicial.value == "") {
    alert("No Ha Escrito Nada");
  } else {
    validar();

    if (valido) {
      alert("¡Solo letras minusculas!");
    } else {
      limpiar();
      separarLetras();
      desencriptarMensaje();
      unirMensaje();
      mostrar();
      cambiarEstilo();
    }
  }
}

botonDesencriptar.onclick = desencriptar;
/*======================================================================*/
