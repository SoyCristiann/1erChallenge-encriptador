//Función que permite copiar al portapapeles el texto en el box id="resultado".
function copiar(){
    let msgCopiado = msgFinal.value;
    navigator.clipboard.writeText(msgCopiado);
    inputUser.value = "";
    msgFinal.value = "";
    inputUser.focus();
}
//Evento que llama la función copiar en el botón.
btnCopy.onclick = copiar;

//Función que encripta el texto.
function encriptar (){
    let texto_cod = inputUser.value;
    texto_cod = texto_cod.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    msgFinal.value = texto_cod;
}
//Evento que llama a la función encriptar al presionar el botón. 
btnEncriptar.addEventListener("click", function(){
    var boolean = validarText(); //Valida si el texto es válido y ejecuta la función.
    if (boolean == true){
    encriptar();
    }
});

//Función que desencripta el texto.
function desencriptar () {
    let text_cod = inputUser.value;
    text_cod = text_cod.replace(/enter/gi, "e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    msgFinal.value = text_cod;
}
//Evento que llama a la función desencriptar al presionar el botón.
btnDesencriptar.addEventListener("click", function(){
    var boolean = validarText(); //Valida si el texto es válido y ejecuta la función.
    if (boolean == true){
        desencriptar();
    }
});
