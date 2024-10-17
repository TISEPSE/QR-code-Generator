import {toDataURL} from "qrcode";

const input = document.getElementById('QrCodeInput')
const button = document.getElementById('QrCodeButton')
const img = doucment.getElementById('QrCodeImage')

button.addEventListener('click', async () =>{
    const dataUrl = await QRCode.toDataURL(input.value)

    img.src = dataUrl;

});