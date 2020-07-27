class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super (matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.velocidade = velocidade;
    this.x = width;
  }
  
  move() {
    this.x = this.x - this.velocidade;
  }
  
  aparece() {
    this.x = width;
  }
}

//foi removido o delay do constructor pois agora temos um mapa do jogo controlando o surgimento dos inimigos, o delay é muito bom para o caso do jogo ser infinito, somente no caso do mapa não é necessário