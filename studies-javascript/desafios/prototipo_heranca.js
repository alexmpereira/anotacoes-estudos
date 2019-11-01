function Rect(base, altura){
  this.base = base;
  this.altura = altura;

  this.area = function(){
    return this.b * this.altura;
  }
}

function Square(lado){
  this.base = lado;
  this.altura = lado;
}

Square.prototype = new Rect();

// var sqr = new Square(5);
// sqr.area()