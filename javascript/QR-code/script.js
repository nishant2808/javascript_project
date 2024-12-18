const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadbtn = document.getElementById('downloadbtn');
const qrContainer = document.querySelector('.qr-body');
let error = document.getElementById('errormsg');

let size = sizes.value;

generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();   
});
sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});
downloadbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let img =document.querySelector('.qr-body img');
    if (img !== null){
        let imgAttr = img.getAttribute('src');
        downloadbtn.setAttribute("herf",imgAttr);
    }else{
        downloadbtn.setAttribute("herf",`${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput(){
    // if(qrText.value.length > 0){
        
    //     generateQRCode();
    // }else{
    //     error.textContent = "Enter the Text or URL to Generate Your QR Code";
    //     error.style.color = "red";
    //     setTimeout(()=>{
    //         error.textContent = "";
    //     },3000)

    // }
    qrText.value.length > 0 ? generateQRCode() 
    :(
        error.textContent = "Enter the Text or URL to Generate Your QR Code", error.style.color = "red",setTimeout(()=>{
        error.textContent = "";
        },3000)
    );
}

function generateQRCode(){
    qrContainer.innerHTML='';
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}