#### Flutter

JIT vs OAT
- Javascript utilizar a compilação Just-in-time, ou seja, o JIT compila o código em tempo de execução (por demandas)
- Dart utiliza ahead of time, ou seja, compila todo o código ainda em tempo de desenvolvimento, antes da execução.

Bridge
- O React usa uma camada Bridge para se comunicar com a plataforma nativa, com essa camada acaba perdendo desempenho pela grande quantidade de dados que deve passar.
- O Dart não tem a camada bridge, pois ele é compilado para a plataforma nativa e se comunica diretamente com os Widgets e Services.

Widgets
Pense em uma tela do aplicativo como um LEGO, onde cada widget é uma pequena peça e, ao final, este conjunto de peças representará uma interface completa:

Stateful e Stateless
- Existem dois tipos principais de widget, com estado e sem estado.
	- Aqueles que não precisam acompanhar os dados são StatelessWidgets. Widget stateless é útil quando a parte da interface do usuário que você está descrevendo não depende de nada além das informações de configuração no próprio objeto e do BuildContext no qual o widget é criado.
	- Para composições que podem mudar dinamicamente, por exemplo um estado interno controlado pelo relógio ou, dependendo de algum estado do sistema, considere o uso de StatefulWidget, salvo no caso de utilização de streams.

Stateful Widgets: são widgets que reagem à alteração de informações. Uma lista que mostra os itens vindos de uma API pode ser considerada um widget stateful, já que ela deverá ser alterada quando um novo elemento for retornado pela API que fornece os dados para essa lista. No caso, a alteração é que a lista deverá conter um novo elemento quando a API retornar um novo elemento também;

```dart
	class MyApp extends StatefulWidget {
		@override
		State<StatefulWidget> createState() {
			return _MyAppState();
		}
	}

	class _MyAppState extends State<MyApp> {
		@override
		Widget build(BuildContext context) {
			return Container(color: const Color(0xFFFFE306));
		}
	}

```

Stateless Widgets: são widgets estáticos e que não precisam reagir às alterações. Um label de título da aplicação que nunca tem seu valor alterado pode ser considerado um widget stateless.

```dart
	class MyHomePage extends StatelessWidget {
		@override
		Widget build(BuildContext context) {
			return Scaffold(
				appBar: AppBar(
					title: Text("Primeira App"),
				),
				body: Container(
					child: Text("Olá, mundo!"),
				),
			);
		}
	}
```

Método setState()
Sempre que precisamos alterar um determinado valor em um aplicativo Flutter, devemos adicionar esta instrução no método setState(). É ele quem vai alterar o estado desta informação e atualizar a página para que o novo valor seja exibido.

```dart
	class MyHomePage extends StatefulWidget {
		@override
		_MyHomePageState createState() => _MyHomePageState();
	}

	class _MyHomePageState extends State<MyHomePage> {
		int _counter = 0;

		void _incrementCounter() {
			setState(() {
				_counter++;
			});
		}

		@override
		Widget build(BuildContext context) {
			return Scaffold(
				appBar: AppBar(
					title: Text("Primeira App"),
				),
				body: Center(
					child: Column(
						mainAxisAlignment: MainAxisAlignment.center,
						children: <Widget>[
							Text(
								'Você pressionou o botão:',
							),
							Text(
								'$_counter vezes',
								style: Theme.of(context).textTheme.display1,
							),
						],
					),
				),
				floatingActionButton: FloatingActionButton(
					onPressed: _incrementCounter,
					tooltip: 'Increment',
					child: Icon(Icons.add),
				),
			);
		}
	}
```