
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var inputUser = document.querySelector("#input-texto"); //Toma el campo de texto que ingresa el usuario.
inputUser.focus();
var msgFinal = document.querySelector("#resultado"); //Output encriptado - desencriptado.
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopy = document.querySelector("#btn-copy"); //Botón copiar.

function copiar(){
    let msgCopiado = msgFinal.value;
    navigator.clipboard.writeText(msgCopiado);
    inputUser.value = "";
    msgFinal.value = "";
    inputUser.focus();
}

function validarText(){ // aqui voy
    var validar;
    var text_cod = inputUser.value; //Tomo el texto
    var text_minuscula = text_cod.toLowerCase();

    if(text_cod === text_minuscula){
        validar = true;
    }
    else{            
        alert("Caracteres invalidos!. \nPor favor ingrese solo letras minúsculas y sin acento.");
        validar = false;
    }
    return validar;
}


function encriptar (){
    let texto_cod = inputUser.value;
    texto_cod = texto_cod.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    msgFinal.value = texto_cod;
}

function desencriptar () {
    let text_cod = inputUser.value;
    text_cod = text_cod.replace(/enter/gi, "e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    msgFinal.value = text_cod;
}

btnEncriptar.addEventListener("click", function(){
    var boolean = validarText();
    console.log(boolean)
    if (boolean == true){
    encriptar();
    }
});

btnDesencriptar.onclick = validarText;

btnCopy.onclick = copiar;
