# studies-javascript

- Instalando um servidor em node para executar js: **npm install -g http-server**
    - Acesse a pasta do projeto
    - Digite: **npm install http-server**
    - Em seguida digite:  **http-serve .**
    - Basta acessar por exemplo: **localhost:8080/index.html**

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

#### Trabalhando com internacionalização 

- numberFormat

```javascript
let myNumber = 1285;

let formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'JPY'
});

console.log( formatter.format(myNumber) );
```

- DateTimeFormat

```javascript
let myDate = new Date('2020-12-31T12:00:00');

let formatter = new Intl.DateTimeFormat('en-US',{
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric'
});


console.log( formatter.format(myDate) );
```


