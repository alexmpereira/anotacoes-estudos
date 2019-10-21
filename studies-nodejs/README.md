##### Anotações do curso de NodeJS Tecnospeed

- Dentro da pasta que será o projeto digite: **npm init -y**
- Instalando a dependência Express via npm: **npm install express**
- Instalando a dependência NodeMon via npm: **npm install -D nodemon**
  - No arquivo package.json da parte de scripts, deve ser adicionado a seguinte linha: **"dev": "nodemon server.js"**
  - Com ele instalado para rodar o projeto deve executar o comando: **npm run dev**
- Instalando o mongoose: **npm install mongoose**
- Para testar se o servidor está funcionando digite: **node server.js**
- Instalando o require-dir: **npm install require-dir**
- Instalando biblioteca para paginação: **npm install mongoose-paginate**
- Instalando a biblioteca CORS: **npm install cors**

##### Usando a imagem do mongoDB do docker
- Primeiro baixe o container mongo: **docker pull mongo**
- Digite o campo a seguir para rodar o container baixado na porta 27017: **docker run --name mongodb -p 27017:27017 -d mongo**
- Testar se está executando corretamente, abra no navegador: **http://localhost:27017/**
  - Para testar mais a fundo se o mongoDb tá funcionando, verificando os schemas, instale o programa Robo3T: https://robomongo.org/download

##### O que é o Express?
- Express é um microframework que nos ajuda a lidar com rotas e views

##### O que é Nodemon
- Sempre que ocorrer atualização no servidor o nodemon atualiza automaticamente sem a necessidade de parar e rodar novamente o servidor.

##### O que o Mongoose faz?
- Mongoose é um ORM de bancos de dados não relacionais para o mongoDB.

##### Para que serve a biblioteca require-dir
- Esta biblioteca serve para evitar de sempre realizar diversos requires nos arquivos. Por exemplo quando começamos a criar nossos models temos que fazer o require de cada um.