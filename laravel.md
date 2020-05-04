### Endpoint

- É uma rota HTTP que aponta para um determinado recurso (funcionalidades) na API
**Exemplo:** _Criar uma API Web com um endpoint que seja capaz de disponibilizar a lista de clientes cadastrados. Os clientes cadastrados são um recurso_

### HTTP

- Significado: Protocolo de Transferência de HiperTexto;
- O protocolo HTTP é baseado na comunicação entre uma máquina cliente que faz requisições para uma máquina servidora;
- Cada pedido que a máquina cliente faz para o servidor é chamado de requisição ou request;
- A resposta da máquina servidor para cada pedido é chamado de resposta ou response;

### Principais Status HTTP

- 200, OK. Significa que o servidor entendeu a requisição e a processou sem problemas.
- 302, Found. Significa que o recurso solicitado de fato existe no servidor (status típico de requisições GET)
- 401, Unauthorized. Significa que você tentou acessar algum recurso do servidor que exige autenticação para acesso, e você ainda não realizou este processo.
- 404, Not Found. Significa que você solicitou algum recurso no servidor que não existe no lugar que você indicou. Por exemplo: se você tenta acessar alguma página de algum site que não existe.
- 500, Internal Server Error. Significa que o servidor encontrou um erro durante o processamento da requisição.

### Gerando dados no banco através do tinker

Para executar o tinker digite:
> php artisan tinker

Para criar um dado em uma tabela:
> App\Models\Classroom::create(['description' => 'primeiro ano']);

### Criando um controller através do comando artisan para as apis

> php artisan make:controller NomeController --api

### Comando para listar as rotas

> php artisan route:list

### Criando a classe request para tratar validações do form request

> php artisan make:request NomeRequest

**OBS:** A função authorize pode deixar como true.

### Criando os metodos padrões para as rotas na api

> Route::apiResource('caminho', 'NomeController');

### O que são HEATOES?

- Com os HEATOES podemos informar para nosso cliente quais as ações que ele pode fazer e quais endereços ele deve acessar para realizar as ações.
- Para exemplo disso, foi criado no projeto do curso a pasta Services contendo uma classe chamada LinksGenerator, que é instânciada dentro do arquivo Resource/Student.php e nas rotas da classe api.php foi adicionado os names para cada recurso (é necessario passar os names)

#### Swagger
- Ferramenta para consutruir documentação de API: swagger.io
- Para implementar no Laravel o swagger existe o seguinte repositório para implementar: https://github.com/DarkaOnLine/L5-Swagger