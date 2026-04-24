import { Injectable, NotFoundException } from '@nestjs/common';

type Tarefa = {
  id: number;
  nome: string;
  prioridade: string;
  status: string;
};

@Injectable()
export class TarefasService {
  private tarefas: Tarefa[] = [
    { id: 1, nome: 'Beber água', prioridade: 'média', status: 'Concluída' },
    { id: 2, nome: 'Estudar', prioridade: 'alta', status: 'Não concluída' },
    { id: 3, nome: 'Jogar', prioridade: 'baixa', status: 'Não concluída' },
    { id: 4, nome: 'Viajar', prioridade: 'baixa', status: 'Não concluída' }
  ];

  listar(prioridade?: string, limite?: number) {
    let resultado = [...this.tarefas];

    if (prioridade) {
      resultado = resultado.filter((p) => p.prioridade === prioridade);
    }

    if (limite && limite > 0) {
      resultado = resultado.slice(0, limite);
    }

    return resultado;
  }

  buscarPorId(id: number) {
    const Tarefa = this.tarefas.find((p) => p.id === id);

    if (!Tarefa) {
      throw new NotFoundException('Tarefa não encontrado');
    }

    return Tarefa;
  }

  criar(dados: Omit<Tarefa, 'id'>) {
    const novoId = this.tarefas.length > 0
      ? Math.max(...this.tarefas.map((p) => p.id)) + 1
      : 1;

    const novoTarefa: Tarefa = { id: novoId, ...dados };
    this.tarefas.push(novoTarefa);

    return novoTarefa;
  }

  atualizarCompleto(id: number, dados: Omit<Tarefa, 'id'>) {
    const indice = this.tarefas.findIndex((p) => p.id === id);

    if (indice === -1) {
      throw new NotFoundException('Tarefa não encontrada.');
    }

    const atualizado: Tarefa = { id, ...dados };
    this.tarefas[indice] = atualizado;
    return atualizado;
  }

  atualizarParcial(id: number, dados: Partial<Omit<Tarefa, 'id'>>) {
    const tarefa = this.buscarPorId(id);
    const atualizado = { ...tarefa, ...dados };

    this.tarefas = this.tarefas.map((p) => (p.id === id ? atualizado : p));
    return atualizado;
  }

  remover(id: number) {
    const existe = this.tarefas.some((p) => p.id === id);

    if (!existe) {
      throw new NotFoundException('Tarefa não encontrada.');
    }

    this.tarefas = this.tarefas.filter((p) => p.id !== id);
    return { mensagem: `Tarefa com ID: ${id} removido com sucesso` };
  }
}