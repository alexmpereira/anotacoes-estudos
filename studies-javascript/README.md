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

