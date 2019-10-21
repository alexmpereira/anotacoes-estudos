#### FLutter

JIT vs OAT
- Javascript utilizar a compilação Just-in-time, ou seja, o JIT compila o código em tempo de execução (por demandas)
- Dart utiliza ahead of time, ou seja, compula todo o código ainda em tempo de desenvolvimento, antes da execução.

Bridge
- O React usa uma camada Bridge para se comunicar com a plataforma nativa, com essa camada acaba perdendo desempenho pela grande quantidade de dados que deve passar.
- O Dart não tem a camada bridge, pois ele é compilado para a plataforma nativa e se comunica diretamente com os Widgets e Services.

Widgets
- Existem dois tipos principais de widget, com estado e sem estado.
	- Aqueles que não precisam acompanhar os dados são StatelessWidgets. Widget stateless é útil quando a parte da interface do usuário que você está descrevendo não depende de nada além das informações de configuração no próprio objeto e do BuildContext no qual o widget é criado.
	- Para composições que podem mudar dinamicamente, por exemplo um estado interno controlado pelo relógio ou, dependendo de algum estado do sistema, considere o uso de StatefulWidget, salvo no caso de utilização de streams.