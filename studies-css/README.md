# Algumas anotações de detalhes a mais do que já sei sobre o CSS

#### Variáveis no CSS de forma global

Usando a função _var()_;

```CSS
  :root{
    --minha-cor: red;
  }

  div{
    background-color: var(--minha-cor);
  }

  span{
    color: var(--minha-cor);
  }
```

#### Sprites

Sites  que geram sprites automatico:
- http://www.spritecow.com/
- https://wearekiss.com/spritepad

```CSS
.meu-icone{
   height: 20px;
   width: 20px;
   background-image: url('meu_sprite.png');
   background-repeat: no-repeat;
   background-position: -20px 0;
}
```

Usamos o **background-position** para vertical e horizontal, selecionando assim o icone da sprite desejada.

#### Pré Processadores

- Sass: http://www.sassmeister.com/;
- Less: http://winless.org/online-less-compiler;
- Stylus: http://stylus-lang.com/try.html

#### Arquitetura de códigos

##### BEM

Exemplo

```HTML
<button class="botao botao--azul" >
   <span class="botao__label" >Click Me</span>
</button>
```

- Block (Elemento pai): **.botao{ . . . }**
- Elements (Elemento filho): **.botao__label{ . . . }**
- Modifiers (Pode modificar o estilo do block): **.botao--azul{ . . . }**

##### ACSS

Atomic CSS. A ideia aqui é declarar algumas classes que possuem apenas uma declaração. Assim, quando for necessário fazer uma pequena alteração em um elemento, não precisamos criar uma regra apenas para aqueles elementos ou ficarmos tentados a declarar o style inline.

```HTML
<div class="minha-div mt-10" >
   Olá <span class="fs-20" >Mundo!</span>
</div>
```

```CSS
.mt-10{ margin-top: 10px; }
.mt-20{ margin-top: 20px; }
.fs-20{ font-size: 20px; }
.minha-div{
   color: red;
   background: green;
   font-size: 15px;
}
```

No exemplo acima, temos uma Div com uma classe comum. O tamanho da fonte dessa classe é 15px. No interior dessa Div, queremos apenas que uma das palavras tenha uma fonte de tamanho diferente. Ao invés de criar um seletor apenas para esse ajuste, ou declarar a regra diretamente no HTML, nós utilizamos a classe ".fs-20", que serve exatamente para este propósito: deixar a fonte com 20px.

Veja que também quisemos uma margem na parte superior de 10px na Div, então aproveitamos a classe ".mt-10".

##### DRY CSS

DRY - Não se repita

```CSS
div{
   background-color: #000;
   color: #fff;
}
span{
   background-color: #f00;
   color: #fff;
}
```

Veja no exemplo acima que temos a propriedade "color" com o mesmo valor, "#fff". Então deveríamos criar uma classe para guardar "color: #fff" e reutilizar esta classe onde necessário, evitando repetir a declaração.

