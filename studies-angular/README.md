#### Comandos
- Comando para criar um novo projeto angular: **ng new name-project**
- Comando para rodar o projeto: **ng serve --open --port 3000**
- Comando para criar um novo componente: **ng g c nome-component**
- Comando para criar um Service: **ng g s hero**
- Para criar novos modules digite: **ng g m name-module**
- Geração de rota especifica para o componente: **ng g m app-routing --flat --module=app**

#### Sobre o Angular
- Dentro do component, existe o @Component onde é gerado três metadados: _selector, templateUrl, styleUrls_
  * **selector**: O seletor de elemento CSS do componente
  * **templateUrl**: A localização do arquivo de modelo do componente.
  * **styleUrls**: A localização dos estilos CSS privados do componente.  
- O **ngOnInit** é o gancho de vida, ela é chamada logo após a criação do componente, ótimo lugar para declarar a lógica de inicialização.
- Para utilizar os componentes em outros componentes, deve declarar a chamada no **appModule**
- Para importar uma classe criada no src/app deve declarar no topo do componente da seguinte maneira: **import { Hero } from '../hero';**
- As **pipes** servem para formatar strings, valores e moedas
- Alguns dos metadados estão nos decoradores do @Component, já outros estão localizados no decorador @ngModule
  * Por paradrão o ngModule, já vem implementado, sendo necessário apenas declarar as bibliotecas que vamos utilizar em nossa aplicação.
  * A biblioteca **FormModule** por exemplo, serve para realizar integração do formulário com os dados da aplicação.