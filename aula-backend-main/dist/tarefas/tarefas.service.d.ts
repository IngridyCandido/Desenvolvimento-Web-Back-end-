type Tarefa = {
    id: number;
    nome: string;
    prioridade: string;
    status: string;
};
export declare class TarefasService {
    private tarefas;
    listar(prioridade?: string, limite?: number): Tarefa[];
    buscarPorId(id: number): Tarefa;
    criar(dados: Omit<Tarefa, 'id'>): Tarefa;
    atualizarCompleto(id: number, dados: Omit<Tarefa, 'id'>): Tarefa;
    atualizarParcial(id: number, dados: Partial<Omit<Tarefa, 'id'>>): {
        nome: string;
        prioridade: string;
        status: string;
        id: number;
    };
    remover(id: number): {
        mensagem: string;
    };
}
export {};
