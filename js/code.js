document.getElementById("texto-encriptado").style.visibility = "hidden";
document.getElementById("boton-copiar").style.visibility = "hidden";
/*======================================================================*/
/*======================================================================*/

let textoInicial = document.getElementById("texto-entrada");
let botonEncriptar = document.getElementById("boton-encriptar");
let botonDesencriptar = document.getElementById("boton-desencriptar");
let botonCopiar = document.getElementById("boton-copiar");

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
  document.getElementById("texto-entrada").value = "";
  document.getElementById("encriptador-muneco").style.visibility = "hidden";
  document.getElementById("mensaje-lateral").style.visibility = "hidden";
  document.getElementById("texto-encriptado").style.visibility = "visible";
  document.getElementById("boton-copiar").style.visibility = "visible";
  document.getElementById("texto-encriptado").innerHTML = textoFinal;
}

function limpiar() {
  letras = [];
  textoFinal = "";
  textoEncriptado = "";
}

function validar() {
  valido = /[^a-z \s]/.test(textoInicial.value);
}
/*======================================================================*/
/*======================================================================*/

function encriptar() {
  validar();

  if (valido) {
    alert("¡Solo letras minusculas!");
  } else {
    limpiar();
    separarLetras();
    encriptarMensaje();
    unirMensaje();
    mostrar();
  }
}

botonEncriptar.onclick = encriptar;
/*======================================================================*/
/*======================================================================*/

function copiar() {
  textoEncriptado = document.getElementById("texto-encriptado");
  navigator.clipboard.writeText(textoEncriptado.value);
  alert("¡Ha copiado el texto!");
}

botonCopiar.onclick = copiar;
/*======================================================================*/
/*======================================================================*/

function desencriptar() {
  validar();

  if (valido) {
    alert("¡Solo letras minusculas!");
  } else {
    limpiar();
    separarLetras();
    desencriptarMensaje();
    unirMensaje();
    mostrar();
  }
}

botonDesencriptar.onclick = desencriptar;
/*======================================================================*/
/*======================================================================*/
