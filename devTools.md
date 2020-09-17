##### API do console

$0: Retorna o último elemento selecionado na aba Elements. Muito útil para quando queremos executar um código em um elemento sem ter que ficar buscando-o pelo seu seletor;

$\_: Retorna o último resultado da última ação do console. Se você executar “3 * 5” o console irá retornar 15. Executando “$_”, o retorno será 15;

console.log: Serve para imprimir algo no console. Podemos passar strings, números, objetos, nodes, etc;

console.dir: Se passarmos um elemento para o console.log, tudo o que teremos é o código HTML do elemento. Caso a gente queira visualizar o objeto, basta utilizarmos o console.dir;

console.table: Útil quando temos um array de objetos. Ao invés de visualizar o JSON retornado pelo console.log, podemos visualizar o objeto em forma de tabela ao utilizar o console.table;

console.warn: Imprime algo no console com um ícone indicando que aquilo é um aviso. Muitas bibliotecas e frameworks utilizam para avisar que alguma funcionalidade não está sendo utilizada corretamente, podendo causar comportamentos indesejados;

console.info: Imprime algo no console com um ícone indicando que aquilo é uma simples informação;

console.error: Imprime algo no console com um ícone indicando que aquilo é um erro. Muitas bibliotecas e frameworks utilizam para avisar que alguma funcionalidade não está sendo utilizada corretamente, fazendo com que a dita funcionalidade não funcione;

console.clear: Limpa o console.