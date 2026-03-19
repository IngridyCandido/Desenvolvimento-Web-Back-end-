const { createApp } = Vue;

createApp({
  data() {
    return {
      titulo: 'Painel de Estudos',
      descricao: 'Organize tarefas de revisão de HTML, CSS, JavaScript e Vue.',
      novaTarefa: '',
      categoria: 'HTML',
      filtro: 'Todas',
      tarefas: [
        {
          id: 1,
          texto: 'Revisar estrutura semantica do HTML',
          categoria: 'HTML',
          concluida: false,
        },
        {
          id: 2,
          texto: 'Praticar seletores e box model',
          categoria: 'CSS',
          concluida: true,
        },
        {
          id: 3,
          texto: 'Relembrar eventos e arrays em JavaScript',
          categoria: 'JavaScript',
          concluida: false,
        },
      ],
    };
  },
  computed: {
    tarefasFiltradas() {
      if (this.filtro === 'Pendentes') {
        return this.tarefas.filter((tarefa) => !tarefa.concluida);
      }

      if (this.filtro === 'Concluidas') {
        return this.tarefas.filter((tarefa) => tarefa.concluida);
      }

      return this.tarefas;
    },
  },
  methods: {
    adicionarTarefa() {
      if (!this.novaTarefa.trim()) {
        return;
      }

      this.tarefas.unshift({
        id: Date.now(),
        texto: this.novaTarefa.trim(),
        categoria: this.categoria,
        concluida: false,
      });

      this.novaTarefa = '';
      this.categoria = 'HTML';
    },
    alternarStatus(id) {
      this.tarefas = this.tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa,
      );
    },
  },
}).mount('#app');