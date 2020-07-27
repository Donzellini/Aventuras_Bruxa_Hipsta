class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial; //importante para caso de resetar
    this.vidas = this.inicial;

    this.largura = 25;
    this.altura = 25;
    this.xInicial = 20;
    this.y = 20;
  }

  draw() {
    for (let i = 0; i < this.vidas; i++) { //condiciional para novas vidas
      const margem = i * 10; //essa margem fica boa pra 25, pra 50 fica pouca
      const posicao = this.xInicial * (i + 1);

      image(imagemVida, posicao + margem, this.y, this.altura, this.largura);
    }
  }

  ganhaVida() {
    if (this.vidas <= this.total) {
      this.vidas++; //somando +1 a variável vida
    }
  }

  perdeVida() {
    this.vidas--; //subtraindo -1 a variável vida
  }
}