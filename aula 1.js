/**
 * Respostas - Encontro 01
 * Tema: Backend, HTTP, Cliente-Servidor e NestJS
 */

/**
 * Exercício 1
 * Diferença entre frontend e backend
 */
function exercicio1() {
  return `
Frontend é a parte visual do sistema, com a qual o usuário interage,
como telas, botões e layouts.

Backend é a parte responsável por processar dados, aplicar regras de negócio,
acessar banco de dados e enviar respostas ao frontend.
`;
}

/**
 * Exercício 2
 * Fluxo de login
 */
function exercicio2() {
  return `
1. O usuário digita login e senha no frontend.
2. O cliente (navegador/app) envia uma requisição HTTP para o backend.
3. O backend recebe os dados e valida as informações.
4. O backend consulta o banco de dados para verificar o usuário.
5. Se os dados estiverem corretos, o backend retorna sucesso (ex: 200 OK).
6. Caso contrário, retorna erro (ex: 401 Unauthorized).
7. O frontend recebe a resposta e mostra o resultado ao usuário.
`;
}

/**
 * Exercício 3
 * Métodos HTTP
 */
function exercicio3() {
  return {
    "listar cursos": "GET",
    "cadastrar curso": "POST",
    "atualizar nome de curso": "PUT ou PATCH",
    "remover curso": "DELETE"
  };
}

/**
 * Exercício 4
 * Códigos de status HTTP
 */
function exercicio4() {
  return {
    "recurso criado com sucesso": 201,
    "usuário não autenticado": 401,
    "rota inexistente": 404,
    "falha inesperada no servidor": 500
  };
}

/**
 * Exercício 5
 * Análise do código NestJS
 */
function exercicio5() {
  return `
O código define um controller chamado 'UsersController' com a rota base 'users'.

- @Controller('users'): define o caminho da rota.
- @Get(): indica que o método responde a requisições GET.
- findAll(): é o método executado quando alguém acessa /users.

Quando a rota é acessada, o sistema retorna um array com um usuário:
[{ id: 1, nome: 'Maria' }]

Ou seja, ele simula uma listagem de usuários.
`;
}

/**
 * Execução (opcional)
 */
console.log("Exercício 1:", exercicio1());
console.log("Exercício 2:", exercicio2());
console.log("Exercício 3:", exercicio3());
console.log("Exercício 4:", exercicio4());
console.log("Exercício 5:", exercicio5());