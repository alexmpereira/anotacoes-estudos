- Criar um novo projeto: **npx create-react-app nomeProjeto**
- Instalando o servidor da treinaweb: **npm install -g @treinaweb/tw-dev-server**
  - Rodar o servidor do treinaweb: **tw-dev-server**

#### ciclo de vide (Component React)
Em aplicações com muitos componentes, é muito importante limpar os recursos utilizados pelos componentes quando eles são destruídos.

Podemos declarar métodos especiais no componente de classe para executar algum código quando um componente é montado e desmontado:

```
  componentDidMount() {

  }

  componentWillUnmount() {

  }
```

- O método componentDidMount() é executado depois que a saída do componente é renderizada no DOM.
- O método componentWillUnmount derruba o que é declaro dentro do DidMount

#### Trabalhando com o State

- Nunca tente modificar state diretamente, use sempre o setState();
  ```
    this.setState({
      comment: 'Hello'
    });
  ```

- As atualizações do State podem ser assíncronos, nesse caso sempre tente utilizar o setState passando por função ao invés de objeto:
  ```
    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));
  ```