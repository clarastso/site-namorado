// Seleciona elementos do DOM
const audio = new Audio('./assets/musica.mp3');
const botaoPlay = document.getElementById('botao-play');

// Configurações iniciais
audio.loop = true; // Repetir a música automaticamente
let musicaTocando = false;

// Função principal
function tocarMusica() {
  if (musicaTocando) {
    audio.pause();
    botaoPlay.innerHTML = '▶ Ouvir Nossa Música';
    musicaTocando = false;
  } else {
    audio.play()
      .then(() => {
        botaoPlay.innerHTML = '⏸ Pausar Música';
        musicaTocando = true;
      })
      .catch(error => {
        console.error("Erro ao reproduzir:", error);
        botaoPlay.innerHTML = '❌ Erro ao carregar';
      });
  }
}

// Evento para resetar o botão quando a música acabar (caso loop=false)
audio.addEventListener('ended', () => {
  botaoPlay.innerHTML = '▶ Ouvir Nossa Música';
  musicaTocando = false;
});

// Opcional: Tecla de atalho (Espaço ou Enter para play/pause)
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.code === 'Enter') {
    e.preventDefault();
    tocarMusica();
  }
});