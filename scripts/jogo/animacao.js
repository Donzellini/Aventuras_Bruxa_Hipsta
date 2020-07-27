class Animacao {
  //precisamos delimitar os tamanhos aqui dos sprites
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    this.matriz = matriz;
    this.imagem = imagem; 
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY; //altura do personagem, o variacaoY é para outros tipos de controles que aparecerem por ventura
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    
    this.frameAtual = 0;
  }
  
    exibe(){
      image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
    
    //110 e 135 é a altura e a largura
    //220 e 270 é a altura do sprite
    //image é uma função do p5js que é pra colocar uma imagem no canvas
    
      this.anima();
  }
  
  anima(){
    this.frameAtual++; //estou somando aqui no anima
    
    if(this.frameAtual >= this.matriz.length - 1){
      this.frameAtual = 0;
    }
  }
}