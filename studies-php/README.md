# Anotações

#### Sintaxes heredoc

```PHP
  $isso = '<b>(interpretou)</b>';

  $dados = <<<HTML
  O interpretador entenderá {$isso}
  como sendo uma variável.
  <br /><br />
  <b>Teste HTML</b>
  HTML;

  echo $dados;
```
