export type Tarefa = {
    id: number;
    titulo: string;
    descricao: string;
    prioridade?: 'baixa' | 'media' | 'alta';
    concluida: boolean;
};
export declare class TarefasService {
    private tarefas;
    getTarefas(): Tarefa[];
    getTarefaPorId(id: number): Tarefa | undefined;
    listarTarefasConcluidas(): Tarefa[];
    listarTarefasPorPrioridade(nivel: 'baixa' | 'media' | 'alta'): Tarefa[];
    criarTarefa(tarefa: Tarefa): Tarefa;
    atualizarPacialmenteTarefa(id: number, atualizacoes: Partial<Tarefa>): Tarefa | undefined;
    atualizarCompletamenteTarefa(id: number, tarefaAtualizada: Tarefa): Tarefa;
    excluirTarefa(id: number): {
        mensagem: string;
    };
}
