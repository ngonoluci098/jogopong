let posicaox = 200
let posicaoy = 200
let tamanho = 30
let xraquete = 5
let yraquete = 200
let xraqueteoponente = 540
let yraqueteoponente = 200
let larguraraquete = 15
let alturaraquete = 100
let raio = tamanho/2
let velocidadex = 6
let velocidadey = 6
let velocidadeyraquete;
let largura = 560
let altura = 410
let colidiu = false
let meuspontos = 0
let oponentepontos = 0

function setup() {
  createCanvas(largura, altura);
}

function draw() {
  background(0);
  criabolinha();
  velocidadebolinha();
  tocaborda();
  criaraquete();
  moveraquete();
  colisaoraquete();
  criaraqueteoponente();
  movimentoraqueteoponente();
  colisaoraqueteoponente();
  criarplacar();
  contarpontos();

}

function criabolinha(){
circle(posicaox,posicaoy,tamanho)
}

function velocidadebolinha(){
posicaox += velocidadex
posicaoy += velocidadey
}

function tocaborda(){
if(posicaox + raio > largura || posicaox - raio < 0)
  velocidadex *= -1
if(posicaoy + raio > altura || posicaoy - raio < 0)
  velocidadey *= -1
}

function criaraquete(){
rect(xraquete,yraquete,larguraraquete,alturaraquete)
}

function moveraquete(){if (keyIsDown(UP_ARROW))
  yraquete -= 10
  if (keyIsDown(DOWN_ARROW))
  yraquete += 10
}

function colisaoraquete(){if (posicaox - raio < xraquete + larguraraquete
     && posicaoy - raio < yraquete + alturaraquete
     && posicaoy + raio > yraquete)
    velocidadex *= -1
}
function criaraqueteoponente(){
rect(xraqueteoponente, yraqueteoponente, larguraraquete, alturaraquete)
}
function movimentoraqueteoponente(){
velocidadeyraquete = posicaoy - yraqueteoponente - larguraraquete / 2 - 105
yraqueteoponente += velocidadeyraquete
}
function colisaoraqueteoponente(){
  colidiu = collideRectCircle(xraqueteoponente, yraqueteoponente, larguraraquete, alturaraquete, posicaox, posicaoy, tamanho)
  if (colidiu)
  velocidadex *= -1
}
function criarplacar(){
  stroke(255)
  fill(color(120, 51, 12))
  rect(145, 17, 50, 40)
  rect(375, 17, 50, 40)
  textAlign(CENTER)
  textSize(40)
  fill(255)
  text(meuspontos, 170, 50)
  text(oponentepontos, 400, 50)
}
function contarpontos(){
  if(posicaox < 15)
  oponentepontos += 1
  if (posicaox > 540)
  meuspontos += 1
}
