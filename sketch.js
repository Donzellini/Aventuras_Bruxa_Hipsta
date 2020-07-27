function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40)
  somDoJogo.loop(); //se usamos o play aqui, ao chegar ao final ela para, com o loop não
  // console.log('setup');
  // setup é para aparecer no console
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = { //é um objeto, não precisa definir como em outras linguagens
    jogo,
    telaInicial
  };

  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
}

function keyPressed() { //função nativa do p5js
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}