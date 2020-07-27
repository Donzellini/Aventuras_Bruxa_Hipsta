class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY; //setando o chão, onde é que o chão começa
    this.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 6; //ativa uma função quadrática, então o valor inicial sempre será diferente de 0
    this.alturaDoPulo = -50;
    this.pulos = 0; //quantas vezes a pessoa já pulou antes de cair no chão
    this.invencivel = false; //boolean
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo; //tem que alterar a velocidade do pulo, e não o y diretamente, senão não funciona, o -30 funciona pq o programa tá sempre chamando a gravidade
      this.pulos++ //estou domando +1 a variável pulos
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo; //a velocidade negativa quer dizer que vai pra cima, lembra do plano cartesiano invertido no eixo y na web
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade; //usa a velocidade pra somar no y, é uma função quadrática

    if (this.y > this.yInicial) {
      this.y = this.yInicial; //aqui nós sabemos quando ela está no chão
      this.pulos = 0;
    }
  }

  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000)
  }

  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false; //no método draw, desenhar ela pisacando #desafio
    }

    const precisao = .7;

    // noFill() //é uma função nativa, as 2 linhas abaixo foram apenas um teste para ver a área da colisão
    // rect(this.x, this.y, this.largura * precisao, this.altura * precisao);
    // rect(inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colisao;
  }

}