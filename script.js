document.addEventListener('DOMContentLoaded', () => {
    // Elementos
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const vinylImage = document.querySelector('.vinyl-image');
    const specialSong = document.getElementById('special-song');
    const heartButton = document.getElementById('heart-button');
    const letter = document.getElementById('letter');
    const overlay = document.getElementById('overlay');

    // Transição da tela de splash para a página principal
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 1000);
    }, 3000);

    // Controle do vinil e música
    let isPlaying = false;
    vinylImage.addEventListener('click', () => {
        if (isPlaying) {
            specialSong.pause();
            vinylImage.style.animationPlayState = 'paused';
        } else {
            specialSong.play();
            vinylImage.style.animationPlayState = 'running';
        }
        isPlaying = !isPlaying;
    });

    // Animação do coração e carta
    let isLetterOpen = false;
    heartButton.addEventListener('click', () => {
        if (!isLetterOpen) {
            overlay.classList.add('active');
            letter.classList.add('open');
            isLetterOpen = true;
        } else {
            letter.classList.remove('open');
            setTimeout(() => {
                overlay.classList.remove('active');
                isLetterOpen = false;
            }, 500);
        }
    });

    // Fechar carta ao clicar no overlay
    overlay.addEventListener('click', () => {
        if (isLetterOpen) {
            letter.classList.remove('open');
            setTimeout(() => {
                overlay.classList.remove('active');
                isLetterOpen = false;
            }, 500);
        }
    });

    // Gerar QR Code
    const generateQRCode = () => {
        const qrContainer = document.createElement('div');
        qrContainer.className = 'qr-code';
        qrContainer.innerHTML = `
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href)}" 
                 alt="QR Code do site">
        `;
        document.body.appendChild(qrContainer);
    };

    // Gerar QR Code após 5 segundos
    setTimeout(generateQRCode, 5000);
}); 