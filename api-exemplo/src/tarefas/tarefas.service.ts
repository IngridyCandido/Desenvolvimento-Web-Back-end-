import { Injectable } from '@nestjs/common';

export type Tarefa = {
  id: number;
  titulo: string;
  descricao: string;
  prioridade?: 'baixa' | 'media' | 'alta';
  concluida: boolean;
};

@Injectable()
export class TarefasService {
  private tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Entender onde fica cada componente',
      descricao:
        'Iniciar uma API e verificar onde fica o tipo tarefa, onde se concentra a regra de negócio,  (service evita que o controller fique carregado de lógica), onde estão as partes relacionadas da aplicação (módulo organiza controllers e services de um domínio específico) onde é recebido as requisições HTTP e definido os endpoints (controller deve ficar focado em entrada e saída de dados)',
      prioridade: 'alta',
      concluida: false,
    },
    {
      id: 2,
      titulo: 'Relacionar verbos HTTP',
      descricao:
        'GET(leitura de dados), POST (criação de recurso), PUT (atualização completa de recurso), PATCH (atualização parcial de recurso), DELETE (remoção de recurso)',
      prioridade: 'media',
      concluida: true,
    },
    {
      id: 3,
      titulo: 'Entender parâmetro de rota x query string',
      descricao:
        'Os parâmetros de rota são usados para identificar um recurso específico, enquanto a query string é usada para filtrar ou modificar a resposta',
      prioridade: 'baixa',
      concluida: false,
    },
    {
      id: 4,
      titulo: 'Criar endpoints',
      descricao:
        'Criar endpoints para listar todas as tarefas, criar uma nova tarefa, atualizar uma tarefa existente e excluir uma tarefa',
      prioridade: 'alta',
      concluida: false,
    },
    {
      id: 5,
      titulo: 'Testar a API',
      descricao:
        'Usar ferramentas como Thunder Client para testar os endpoints criados e garantir que estão funcionando corretamente',
      prioridade: 'media',
      concluida: false,
    },
  ];

  getTarefas(): Tarefa[] {
    return this.tarefas;
  }

  getTarefaPorId(id: number): Tarefa | undefined {
    const tarefa = this.tarefas.find((tarefa) => tarefa.id === id);
    if (!tarefa) {
      throw new Error(`Tarefa com id ${id} não encontrada`);
    }
    return this.tarefas.find((tarefa) => tarefa.id === id);
  }

  listarTarefasConcluidas(): Tarefa[] {
    return this.tarefas.filter((tarefa) => tarefa.concluida);
  }

  listarTarefasPorPrioridade(nivel: 'baixa' | 'media' | 'alta'): Tarefa[] {
    return this.tarefas.filter((tarefa) => tarefa.prioridade === nivel);
  }

  criarTarefa(tarefa: Tarefa): Tarefa {
    const novaTarefa = {
      ...tarefa,
      id: this.tarefas.length + 1, // Gerar um ID simples baseado no tamanho do array
    };
    this.tarefas.push(novaTarefa);
    return novaTarefa;
  }

  atualizarPacialmenteTarefa(
    id: number,
    atualizacoes: Partial<Tarefa>,
  ): Tarefa | undefined {
    const tarefa = this.tarefas.find((tarefa) => tarefa.id === id);
    if (tarefa) {
      Object.assign(tarefa, atualizacoes);
      return tarefa;
    }
  }

  atualizarCompletamenteTarefa(id: number, tarefaAtualizada: Tarefa): Tarefa {
    const index = this.tarefas.findIndex((tarefa) => tarefa.id === id);
    if (index === -1) {
      throw new Error(`Tarefa com id ${id} não encontrada`);
    }
    this.tarefas[index] = tarefaAtualizada;
    return tarefaAtualizada;
  }

  excluirTarefa(id: number): { mensagem: string } {
    const index = this.tarefas.findIndex((tarefa) => tarefa.id === id);
    if (index === -1) {
      throw new Error(`Tarefa com id ${id} não encontrada`);
    }
    this.tarefas.splice(index, 1);
    return { mensagem: `Tarefa ${id} removida com sucesso` };
  }
}
