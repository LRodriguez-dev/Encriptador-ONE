// Obteniendo Los TextArea
const message = document.getElementById("messagetxa");
const converted = document.getElementById("convertedtxa");

//obteniendo los botones
//const btnEncrypter = document.getElementById("encrypterbtn");
//const btnDencrypter = document.getElementById("dencrypterbtn");
const btnCopy = document.getElementById("copybtn");

function encrypter() {

    
    converted.value = "";

    var text = message.value;
    var encrypter="";
    
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {

        const element = text[i];

        switch (element) {
            case "a":
                encrypter += "ai";
                break;
            case "e":
                encrypter += "enter";
                break;
            case "i":
                encrypter += "imes";
                break;la
            case "o":
                encrypter += "ober";
                break;
            case "u":
                encrypter += "ufat";
                break;
            default:
                encrypter += element
                break;
        }
    }

    converted.value = encrypter;
    message.value = "";
}

function dencrypter() {

    converted.value = "";

    var decrypted = message.value;

    decrypted = decrypted.replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    converted.value = decrypted;

    message.value = "";
}

//  autosize height textArea queryselectorAll no me funciono
message.addEventListener("keyup", e =>{
    let scHeight = e.target.scrollHeight;
    if(scHeight >= 100){
        message.style.height = `${scHeight}px`;
        converted.style.height = `${scHeight}px`;
    }
});


converted.addEventListener("select", e =>{
    let scHeight = e.target.scrollHeight;
    if(scHeight > 100){
        converted.style.height = `${scHeight}px`;
    }
});

btnEncrypter.addEventListener("click", e =>{
    message.style.height = "100px";
});

btnDencrypter.addEventListener("click", e =>{
    message.style.height = "100px";
});

btnCopy.addEventListener("click", e =>{
    
    
});
//--------

// CopyClippboard con el boton "copy"
function copyToClipboard(text) {
    const type = 'text/plain';
    const blob = new Blob([text], {type});
    let data = [new ClipboardItem({[type]: blob})];
  
    navigator.clipboard.write(data).then(function() {
      //console.log('Copiado!')
    }, function() {
      //console.log('Ups! No se copio');
    });
  }

btnCopy.addEventListener('click', function() {
    copyToClipboard(converted.value);
});

message
// ---------
