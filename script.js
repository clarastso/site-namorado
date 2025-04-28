document.addEventListener('DOMContentLoaded', () => {
    // Elementos
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const vinylImage = document.querySelector('.vinyl-image');
    const specialSong = document.getElementById('special-song');
    const heartButton = document.getElementById('heart-button');
    const letter = document.getElementById('letter');
    const overlay = document.getElementById('overlay');
    const playButton = document.getElementById('play-button');

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
    playButton.addEventListener('click', () => {
        if (isPlaying) {
            specialSong.pause();
            vinylImage.classList.remove('playing');
            playButton.innerHTML = '<i class="fas fa-play"></i> Tocar Música';
        } else {
            specialSong.play().catch(error => {
                console.error('Erro ao tocar música:', error);
                alert('Não foi possível tocar a música. Verifique se o arquivo de áudio está correto.');
            });
            vinylImage.classList.add('playing');
            playButton.innerHTML = '<i class="fas fa-pause"></i> Pausar Música';
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
}); 