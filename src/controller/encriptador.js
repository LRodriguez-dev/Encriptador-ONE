var message = "Mensajoooo";
var letra = "";
var encripted = "";
var decrypted = "";

for(var i=0; i<message.length; i++){
    
    if(
        "a" == message[i] || 
        "A" == message[i]
    ){
            encripted += "ai"
    }else
    if(
        "e" == message[i] || 
        "E" == message[i]
    ){
            encripted += "enter"
    }else
    if(
        "i" == message[i] || 
        "i" == message[i]
    ){
            encripted += "imes"
    }else
    if(
        "o" == message[i] || 
        "O" == message[i]
    ){
            encripted += "ober"
    }else
    if(
    "u" == message[i] || 
    "U" == message[i]
    ){
        encripted += "ufat"
    }
    else
    {
        encripted += message[i] 
    }

    

}
console.log(encripted);

decrypted = encripted.replaceAll("ai", "a")
encripted = decrypted
decrypted =encripted.replaceAll("enter", "e")
encripted = decrypted
decrypted =encripted.replaceAll("ober", "o")
encripted = decrypted
decrypted =encripted.replaceAll("imes, i")
encripted = decrypted
decrypted =encripted.replaceAll("ufat, u")

console.log(decrypted);
/*
if(
    "e" == mensaje[i] || 
    "E" == mensaje[i]
    ){
        letra += "ai"
    }
    if("e" == mensaje[i]){
        letra += "enter" 
    }
    if("i" == mensaje[i]){
        letra += "imes"
    }
    if("o" == mensaje[i] || "O" == mensaje[i]){
        letra += "ober"
    }
    if("U" == mensaje[i]){
        letra += "ufat"
    }else{
        letra += mensaje[i];
    }
*/

// facu consejo de .includes and condiciones if
/*if(["a", "A"].includes(mensaje[i]) ){
    letra += "ai"
}if(["o", "O"].includes(mensaje[i]) ){
    letra += "ai"
}if(["o", "O"].includes(mensaje[i]) ){
    letra += "ai"
}if(["o", "O"].includes(mensaje[i]) ){
    letra += "ai"
}if(["o", "O"].includes(mensaje[i]) ){
    letra += "ai"
}if(["o", "O"].includes(mensaje[i]) ){
    letra += "ai"
}if(["o", "O"].includes(mensaje[i]) ){
    letra += "ai"
}

*/

//console.log(mensaje.replaceAll('e', 'o'));
//mensaje = mensaje.replaceAll();
