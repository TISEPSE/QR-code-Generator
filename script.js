const input = document.getElementById('QrCodeInput')
const button = document.getElementById('QrCodeButton')
const img = document.getElementById('QrCodeImage')

button.addEventListener('click',() =>{
   QRCode.toDataURL(input.value).then(dataUrl => {
    img.src = dataUrl
   })

});