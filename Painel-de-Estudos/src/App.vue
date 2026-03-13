<script setup lang="ts">

import { ref } from "vue"

type Tarefa = {
  id: number
  titulo: string
  descricao: string
  concluida: boolean
}

const titulo = ref("")
const descricao = ref("")
const concluida = ref(false)

const tarefas = ref<Tarefa[]>([])

function adicionarTarefa() {

  if (!titulo.value.trim()) {
    alert("Digite um título")
    return
  }

  const novaTarefa: Tarefa = {
    id: Date.now(),
    titulo: titulo.value,
    descricao: descricao.value,
    concluida: concluida.value
  }

  tarefas.value.push(novaTarefa)

  // limpar formulário
  titulo.value = ""
  descricao.value = ""
  concluida.value = false
}
</script>

<template>

  <div class="Introdução">
  <h1>Painel de Estudos</h1>
  <p>
    O Painel de Estudos é uma aplicação web simples e eficiente criada para ajudar estudantes a organizar e acompanhar suas revisões. 
    A interface apresenta um formulário intuitivo que permite cadastrar novas tarefas de revisão de forma rápida. 
    As tarefas adicionadas são exibidas em uma listagem dinâmica, atualizada automaticamente, facilitando a visualização do que precisa ser estudado. 
    O usuário também pode utilizar um filtro por status para separar tarefas pendentes, concluídas ou visualizar todas.
  </p>
  </div>

  <!-- Formulário -->
  <div class="formulario">
    <h2>Adicionar tarefa</h2>

    <input v-model="titulo" placeholder="Título da tarefa" />

    <textarea 
      v-model="descricao" 
      placeholder="Descrição da tarefa">
    </textarea>

    <label>
      <input type="checkbox" v-model="concluida"> Concluída
    </label>

    <button @click="adicionarTarefa">Adicionar tarefa</button>
  </div>

  <!-- Lista de tarefas -->
  <div class="lista">
    <h2>Lista de Tarefas</h2>

    <ul>
      <li v-for="tarefa in tarefas" :key="tarefa.id">
        <strong>{{ tarefa.titulo }}</strong>
        <p>{{ tarefa.descricao }}</p>
        <span>Status: {{ tarefa.concluida ? "Concluída" : "Pendente" }}</span>
      </li>
    </ul>
  </div>

</template>

<style scoped>

h1, p {
  text-align: center;
  margin: 50px 200px 50px 200px;
  padding: 5px;
}

body{
  font-family: Arial, sans-serif;
}

.formulario{
  margin-bottom:20px;
}

input, textarea{
  display:block;
  margin:10px 0;
  padding:8px;
  width:300px;
}

li{
  border:1px solid #ccc;
  padding:10px;
  margin-bottom:10px;
}
</style>
