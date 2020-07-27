class Cenario {
  constructor(imagem, velocidade){
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0; //onde a imagem vai começar
    this.x2 = width;
    //constructor é um recurso do próprio JS
  }
  
  exibe () {
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2, 0, width, height); //ctrl+shift+D
  }
  
  move () {
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;
    
    if (this.x1 < -width){ //o -width faz com que o bg retorne para o início do bg anterior
      this.x1 = width;
    }
    
    if (this.x2 < -width){ 
      this.x2 = width;
    }
    
  }
}