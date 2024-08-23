let textoIngresado = document.getElementById("texto");
let textoEncriptado = document.querySelector(".desencriptador__textoEscondido__p");
let imagen = document.querySelector(".desencriptador__imagen");
let desencriptador = document.querySelector(".desencriptador");
let desencriptadorP = document.querySelector(".desencriptador__p");
let desencriptadorH2 = document.querySelector(".desencriptador__h2");
let botonEscondido = document.querySelector(".desencriptador__boton");
let botonEncriptar = document.querySelector('.encriptador__botones__encriptar');
let botonDesencriptar = document.querySelector('.encriptador__botones__desencriptar');

textoIngresado.addEventListener('input', activarBotones)
textoIngresado.addEventListener('input', autoResize);


function encriptar() {
  validarTexto();
  desencriptador.style.justifyContent = "space-between";
  imagen.style.display = "none";
  desencriptadorP.style.display = "none";
  desencriptadorH2.style.display = "none";
  botonEscondido.style.display = "block";

  let texto = textoIngresado.value;
  let encriptacion = "";

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];

    // Comprobamos cada letra y reemplazamos según sea necesario.
    if (letra === "e") {
      encriptacion += "enter";
    } else if (letra === "i") {
      encriptacion += "imes";
    } else if (letra === "a") {
      encriptacion += "ai";
    } else if (letra === "o") {
      encriptacion += "ober";
    } else if (letra === "u") {
      encriptacion += "ufat";
    } else {
      encriptacion += letra; // Si no coincide, se mantiene la letra original
    }
    textoEncriptado.innerHTML = encriptacion;
  }
}

function desencriptar() {
  validarTexto();
  desencriptador.style.justifyContent = "space-between";
  imagen.style.display = "none";
  desencriptadorP.style.display = "none";
  desencriptadorH2.style.display = "none";
  botonEscondido.style.display = "block";

  let encriptacion = textoIngresado.value;
  encriptacion = encriptacion.replace(/ai/g, "a");
  encriptacion = encriptacion.replace(/enter/g, "e");
  encriptacion = encriptacion.replace(/imes/g, "i");
  encriptacion = encriptacion.replace(/ober/g, "o");
  encriptacion = encriptacion.replace(/ufat/g, "u");
  textoEncriptado.innerHTML = encriptacion;
}

function copiarTexto() {
  let textoACopiar = document.querySelector(".desencriptador__textoEscondido__p");
  let tempImput = document.createElement("textarea");
  tempImput.value = textoACopiar.textContent;
  document.body.appendChild(tempImput);
  tempImput.select();
  document.execCommand("copy");
  document.body.removeChild(tempImput);
}

function validarTexto() {
  let texto = textoIngresado.value;
  let caracteresNoPermitidos = /[^a-z\s]/g;

  if (caracteresNoPermitidos.test(texto)) {
    alert(
      "El texto solo puede contener letras minúsculas sin acentos ni caracteres especiales."
    );
    location.reload();
  }
}

function activarBotones(){
    if (textoIngresado.value.trim()==="") {
        botonEncriptar.disabled= true;
        botonDesencriptar.disabled=true;
    } else {
        botonEncriptar.disabled= false;
        botonDesencriptar.disabled=false;
    }
}

function autoResize() {
    this.style.height = 'auto'; // Restablece la altura para recálculo
    this.style.height = (this.scrollHeight) + 'px'; // Ajusta la altura según el contenido
}

console.log("Hola! Mi nombre es Ramón Cruz y quiero agradecerles esta oportunidad. Espero les guste mi página, me llevó mucha dedicación realizarla.")
console.log(`
    _____
   /     \\
  | o   o |
  |  \\_/  |
   \\_____/
 `);