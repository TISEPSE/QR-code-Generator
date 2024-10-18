const input = document.getElementById('QrCodeInput');
        const button = document.getElementById('QrCodeButton');
        const img = document.getElementById('QrCodeImage');
        const downloadButton = document.getElementById('QrCodeButtonDownload');

        // Génération du QR code
        button.addEventListener('click', () => {
            const qrText = input.value.trim();
            
            // Vérifie que le champ d'input n'est pas vide
            if (qrText === "") {
                alert("Veuillez entrer une URL.");
                return;
            }

            QRCode.toDataURL(qrText)
                .then(dataUrl => {
                    // Affiche l'image QR code
                    img.src = dataUrl;
                    downloadButton.href = dataUrl;
                })
                .catch(err => {
                    console.error(err);
                });
        });