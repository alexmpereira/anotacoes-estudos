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

#### Configurando uma requisição com fetch

- method - GET | POST | PUT | DELETE | HEAD
- url - URL da requisição
- headers - cabeçalho
- body - corpo da requisição
- referrer - referência da requisição
- mode - cors | no-cors | same-origin
- credentials - indica se os cookies devem ser enviados junto com a requisição
- redirect - follow | error | manual
- integrity - valor de integridade da fonte
- cache - modo do cache (default | reload | no-cache)

```javascript
    fetch('https://myexample.com', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'foo=bar&blah=1'
    })
    .then(response => response.json())
```

#### Trabalhando com módulos no JS

- Ver o exemplo que tá na pasta modulos

#### Exemplo do operador Spred

```javascript
var myList = [3, 4, 5];

function myFunc(a, b, c){
    console.log(a, b,c);
}

myFunc(...myList);
```

#### Exemplo do Template Literals

```javascript
var myVar = 5;
console.log(`My Var value is ${myVar}`);
```

Pulando linhas com interpolação

```javascript
var myString = `a
b
c
`;
```

#### Diferença do for..in e for..of

```javascript
var list = ["a","b","c","d","e"];

for (var index in list) {
    console.log( index );
}


for (var value of list) {
    console.log( value );
}
```

O “for..in” irá imprimir todos os índices, enquanto o “for..of” irá imprimir os valores.

# RXJS
