class Jogo {
  constructor() {
    this.indice = 0;
    
    this.mapa = fita.mapa
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3); //velocidade que o cenário vai se mexer
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270); //110 e 135 é a altura e a largura
    //220 e 270 é a altura do sprite
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    }
  }

  draw() {
    cenario.exibe(); //desenha o cenário
    cenario.move();
    // circle(mouseX, mouseY, 200); //plano cartesiano (x, y), eixo invertido, fluxo natural apresentado na web
    // o mouseX e o mouseY são recursos no p5js, não são nativos do JS
    // console.log('draw')
    // draw é para aparecer na tela, "desenha"
    // localização do personagem, posição da imagem, tamanho da imagem
    // o p5 lê de cima pra baixo, então, prestar atenção nas posições

    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();
    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++; //andei +1 com o inimigo
      inimigo.aparece()
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornarInvencivel();
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 2 - 200); //operadores para centralizar a imagem
        noLoop(); //é uma função
      }
    }
  }
}