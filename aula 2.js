/**
 * Respostas - Encontro 02
 * Tema: HTML, CSS, JavaScript e introdução ao Vue.js
 */

/**
 * Exercício 1
 * Papel de HTML, CSS e JavaScript
 */
function exercicio1() {
  return {
    HTML: "Responsável pela estrutura da página (títulos, textos, botões, listas, formulários).",
    CSS: "Responsável pela aparência visual (cores, espaçamento, layout, tipografia).",
    JavaScript: "Responsável pelo comportamento (interações, eventos, atualização de dados e consumo de APIs)."
  };
}

/**
 * Exercício 2
 * Como trabalham juntos
 */
function exercicio2() {
  return `
HTML organiza o conteúdo da página.
CSS melhora a apresentação visual.
JavaScript adiciona interatividade e comportamento dinâmico.

Juntos, formam a interface Web.
`;
}

/**
 * Exercício 3
 * O que é Vue.js
 */
function exercicio3() {
  return `
Vue.js é um framework progressivo para construção de interfaces de usuário.

Ele permite descrever a interface com base nos dados.
Quando os dados mudam, a tela é atualizada automaticamente.
`;
}

/**
 * Exercício 4
 * Reatividade
 */
function exercicio4() {
  return `
Reatividade é o conceito onde os dados da aplicação controlam o que aparece na tela.

Quando os dados mudam, a interface é atualizada automaticamente sem manipulação manual do DOM.
`;
}

/**
 * Exercício 5
 * Diretivas do Vue
 */
function exercicio5() {
  return {
    "v-model": "Cria ligação entre campo de formulário e variável.",
    "v-for": "Repete elementos com base em uma lista.",
    "v-if": "Renderiza conteúdo apenas quando a condição é verdadeira.",
    "@click": "Associa evento de clique a um método."
  };
}

/**
 * Exercício 6
 * Fluxo do exemplo de tarefas
 */
function exercicio6() {
  return `
1. Usuário digita no input.
2. v-model atualiza a variável novaTarefa.
3. Usuário clica no botão.
4. @click chama o método adicionarTarefa.
5. O método adiciona item na lista tarefas.
6. O Vue atualiza automaticamente a interface.
`;
}

/**
 * Exercício 7
 * Função do computed
 */
function exercicio7() {
  return `
Computed serve para calcular dados derivados a partir do estado atual.

Exemplo: tarefasFiltradas depende de tarefas e filtro.
`;
}

/**
 * Exercício 8
 * Options API vs Composition API
 */
function exercicio8() {
  return {
    "Options API": "Organiza o código em blocos como data, computed e methods.",
    "Composition API": "Organiza o código por funcionalidades dentro de setup()."
  };
}

/**
 * Exercício 9
 * Relação com backend
 */
function exercicio9() {
  return `
O frontend coleta dados, envia requisições e exibe respostas.

Entender frontend ajuda a definir entradas, respostas e estrutura da API no backend.
`;
}

/**
 * Execução (opcional)
 */
console.log(exercicio1());
console.log(exercicio2());
console.log(exercicio3());
console.log(exercicio4());
console.log(exercicio5());
console.log(exercicio6());
console.log(exercicio7());
console.log(exercicio8());
console.log(exercicio9());