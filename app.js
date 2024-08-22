let textoIngresado= document.getElementById('texto');
let textoEncriptado=document.querySelector('.desencriptador__h2');
let imagen=document.querySelector('.desencriptador__imagen')
let desencriptador= document.querySelector('.desencriptador__p')


function encriptar(){
    imagen.style.display = 'none';
    desencriptador.style.display = 'none';
    let texto=textoIngresado.value;
    let encriptacion= "";
    
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        
        // Comprobamos cada letra y reemplazamos según sea necesario.
        if (letra === 'e') {
            encriptacion += 'enter';
        } else if (letra === 'i') {
            encriptacion += 'imes';
        } else if (letra === 'a') {
            encriptacion += 'ai';
        } else if (letra === 'o') {
            encriptacion += 'ober';
        } else if (letra === 'u') {
            encriptacion += 'ufat';
        } else {
            encriptacion += letra; // Si no coincide, se mantiene la letra original
        }
    textoEncriptado.innerHTML=encriptacion;
}
}

function desencriptar(){
    imagen.style.display = 'none';
    desencriptador.style.display = 'none';
    let encriptacion= textoIngresado.value;
    encriptacion=encriptacion.replace(/ai/g, "a");
    encriptacion=encriptacion.replace(/enter/g, "e");
    encriptacion=encriptacion.replace(/imes/g, "i");
    encriptacion=encriptacion.replace(/ober/g, "o");
    encriptacion=encriptacion.replace(/ufat/g, "u");
    textoEncriptado.innerHTML=encriptacion;
}