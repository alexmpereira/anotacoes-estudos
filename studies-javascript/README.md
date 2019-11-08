# studies-javascript

- Instalando um servidor em node para executar js: **npm install -g http-server**

#### Declaração de classes no Javascript:

```javascript
class Pencil{
    constructor(color){
        this.color = color;
    }

    write(text){
        console.log(text);
    }
}

var myPencil = new Pencil('red');
```

#### Extendendo classes e métodos estáticos

```javascript
class Animal{
    static sleep(){
        console.log('zzzzzz');
    }
}

class Dog extends Animal{
    bark(){
        console.log('woof');
    }
}

var myDog = new Dog();
```

#### Use Strict

O objetivo de "usar estrito" é indicar que o código deve ser executado no "modo estrito". Com o modo estrito, você não pode, por exemplo, usar variáveis ​​não declaradas.

#### Debugger

Quando precisarmos realizar um debug no código js pelo navegador, podemos declarar debugger; onde vamos mexer, ao atualizar a página automaticamente a janela de desenvolvimento vai indicar o local para podermos debuggar.
Isso ajuda em projetos que contem muitos arquivos e fica complicado de encontrar.

Lembrando que para mostrar o código a ser debugado pelo debugger, a ferramenta de desenvolvimento do navegador deve estar aberta.
