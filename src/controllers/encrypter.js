//call textarea - Obteniendo Los TextArea
const message = document.getElementById("messagetxa");
const converted = document.getElementById("convertedtxa");

//call buttons - obteniendo los botones
const btnEncrypter = document.getElementById("encrypterbtn");
const btnDencrypter = document.getElementById("dencrypterbtn");
const btnCopy = document.getElementById("copybtn");
const btnClean = document.getElementById("cleanbtn");

// diccionary - diccionario
const encrypt = {
    a:"ai", e:"enter", i:"imes", o:"ober", u:"ufat"             
};
const dencrypt = {
    ai:"a", enter:"e", imes:"i", ober:"o", ufat:"u"
}

function encrypter(){
    converted.value = message.value.toLowerCase()
        .replace(/a|e|i|o|u/g, l => encrypt[l]);
}

function dencrypter() {
    converted.value = message.value.toLowerCase()
        .replace((/ai|enter|imes|ober|ufat/g),l => dencrypt[l]);
}

//clean textarea - limpiar textarea
function cleanTxa(){
    message.value = "", converted.value = "";
}

// CopyClippboard - copiar al portapeles
function copyToClipboard() {
    converted.select();
    navigator.clipboard.writeText(converted.value);
    message.value = converted.value;
}

//  autosize height textArea - ajustando textarea con el texto
message.addEventListener("keyup", e =>{
    let scHeight = e.target.scrollHeight;
    //btnCopy.style.background = "#AC34E7";
    if(scHeight > 100){
        message.style.height = `${scHeight}px`;
        
    }else{
        message.style.height = "100px";
    }
    converted.style.height = message.style.height;
});

converted.addEventListener("select", e =>{
    let scHeight = e.target.scrollHeight;
    if(scHeight > 100){
        converted.style.height = `${scHeight}px`;
        message.style.height = `${scHeight}px`;
    }
});

btnEncrypter.addEventListener("click", e =>{
    message.style.height = "100px";
});

btnDencrypter.addEventListener("click", e =>{
    message.style.height = "100px";
});

btnCopy.addEventListener("click", e =>{
    converted.style.height = "100px";
});
btnClean.addEventListener("click", e =>{
    message.style.height = "100px";
    converted.style.height = "100px";
    btnCopy.style.background = "#AC34E7";
});

// function encrypter() {
//     var text = message.value;
//     var encrypter="";
    
//     text = text.toLowerCase();

//     for (let i = 0; i < text.length; i++) {

//         const element = text[i];

//         switch (element) {
//             case "a":
//                 encrypter += "ai";
//                 break;
//             case "e":
//                 encrypter += "enter";
//                 break;
//             case "i":
//                 encrypter += "imes";
//                 break;la
//             case "o":
//                 encrypter += "ober";
//                 break;
//             case "u":
//                 encrypter += "ufat";
//                 break;
//             default:
//                 encrypter += element
//                 break;
//         }
//     }
//     cleanTxa();
//     converted.value = encrypter;
//     //message = "";
// }

// function dencrypter() {

//     var decrypted = message.value;

//     decrypted = decrypted.replace(/ai/g, "a")
//         .replace(/enter/g, "e")
//         .replace(/imes/g, "i")
//         .replace(/ober/g, "o")
//         .replace(/ufat/g, "u");


//     cleanTxa();
//     converted.value = decrypted;
// }

//--------

// // CopyClippboard con el boton "copy"
// function copyToClipboard(text) {
//     const type = 'text/plain';
//     const blob = new Blob([text], {type});
//     let data = [new ClipboardItem({[type]: blob})];
  
//     navigator.clipboard.write(data).then(function() {
//       //console.log('Copiado!')
//     }, function() {
//       //console.log('Ups! No se copio');
//     });
//   }

// btnCopy.addEventListener('click', function() {
//     copyToClipboard(converted.value);
//     btnCopy.style.background = "#4671EA";
// });
// // ---------
