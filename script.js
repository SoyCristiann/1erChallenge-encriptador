
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
inputUser.focus(); //Fija el foco en la caja id="input-texto".
var msgFinal = document.querySelector("#resultado"); //Output encriptado - desencriptado.
var btnEncriptar = document.querySelector("#btn-encriptar"); //Botón encriptar.
var btnDesencriptar = document.querySelector("#btn-desencriptar"); //Botón desencriptar.
var btnCopy = document.querySelector("#btn-copy"); //Botón copiar.
