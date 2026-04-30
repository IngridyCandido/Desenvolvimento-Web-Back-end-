import { TarefasService } from './tarefas.service';
import type { Tarefa } from './tarefas.service';
export declare class TarefasController {
    private readonly tarefasService;
    constructor(tarefasService: TarefasService);
    getTarefas(): Tarefa[];
    listarTarefasConcluidas(): Tarefa[];
    listarTarefasPorPrioridade(nivel: 'baixa' | 'media' | 'alta'): Tarefa[];
    getTarefaPorId(id: number): Tarefa | undefined;
    criarTarefa(tarefa: Tarefa): Tarefa;
    atualizarPacialmenteTarefa(id: number, atualizacoes: Partial<Tarefa>): Tarefa | undefined;
    atualizarCompletamenteTarefa(id: number, tarefaAtualizada: Tarefa): Tarefa | undefined;
    excluirTarefa(id: number): {
        mensagem: string;
    };
}
