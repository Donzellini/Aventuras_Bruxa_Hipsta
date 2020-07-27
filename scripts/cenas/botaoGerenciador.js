class BotaoGerenciador {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto);
    this.botao.mousePressed(() => this._alteraCena());
    this.botao.addClass('botao-tela-inicial');
  }

  draw() {
    this.botao.position(this.x, this.y); //o próprio p5 cria o elemento html
    this.botao.center('horizontal');
  }

  _alteraCena() {
    this.botao.remove();
    cenaAtual = 'jogo';
  }
}