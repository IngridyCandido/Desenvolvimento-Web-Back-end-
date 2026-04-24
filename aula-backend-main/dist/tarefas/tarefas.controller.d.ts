import { TarefasService } from './tarefas.service';
export declare class TarefasController {
    private readonly tarefasService;
    constructor(tarefasService: TarefasService);
    listar(prioridade?: string, limite?: string): {
        id: number;
        nome: string;
        prioridade: string;
        status: string;
    }[];
    buscarPorId(id: string): {
        id: number;
        nome: string;
        prioridade: string;
        status: string;
    };
    criar(body: {
        nome: string;
        prioridade: string;
        status: string;
    }): {
        id: number;
        nome: string;
        prioridade: string;
        status: string;
    };
    atualizarCompleto(id: string, body: {
        nome: string;
        prioridade: string;
        status: string;
    }): {
        id: number;
        nome: string;
        prioridade: string;
        status: string;
    };
    atualizarParcial(id: string, body: {
        nome?: string;
        prioridade?: string;
        status?: string;
    }): {
        nome: string;
        prioridade: string;
        status: string;
        id: number;
    };
    remover(id: string): {
        mensagem: string;
    };
}
