# bootcamp-gostack-desafio01
Implementação do primeiro desafio do bootcamp goStack da RocketSeat

To install dependencies, run "yarn";

<h3>Rotas da aplicação:</h3>

  <h4>*POST /repositories : A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório, os likes serão     gerados automaticamente com o valor 0;
  
  <h4>*GET /repositories : Rota que lista todos os repositórios;

  <h4>*PUT /repositories/:id : A rota altera apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

  <h4>*DELETE /repositories/:id : A rota exclui o repositório com o id presente nos parâmetros da rota;<h4>

  <h4>*POST /repositories/:id/like: A rota aumenta em um o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota</h4>
