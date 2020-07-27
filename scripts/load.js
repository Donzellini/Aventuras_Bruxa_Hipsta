function preload(){ //tudo o que acontece antes do jogo
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  fita = loadJSON('fita/fita.json'); //não precisa ser local, tem geradores online de json
  
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/jump_09.wav');
  
  //aqui dá pra fazer um bg com efeito parallax: 1 bg na frente em uma velocidade, e outro atrás 
}