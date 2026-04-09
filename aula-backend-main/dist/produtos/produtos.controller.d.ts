import { ProdutosService } from './produtos.service';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    listar(categoria?: string, limite?: string): {
        id: number;
        nome: string;
        categoria: string;
        preco: number;
        ativo: boolean;
    }[];
    buscarPorId(id: string): {
        id: number;
        nome: string;
        categoria: string;
        preco: number;
        ativo: boolean;
    };
    criar(body: {
        nome: string;
        categoria: string;
        preco: number;
        ativo: boolean;
    }): {
        id: number;
        nome: string;
        categoria: string;
        preco: number;
        ativo: boolean;
    };
    atualizarCompleto(id: string, body: {
        nome: string;
        categoria: string;
        preco: number;
        ativo: boolean;
    }): {
        id: number;
        nome: string;
        categoria: string;
        preco: number;
        ativo: boolean;
    };
    atualizarParcial(id: string, body: {
        nome?: string;
        categoria?: string;
        preco?: number;
        ativo?: boolean;
    }): {
        nome: string;
        categoria: string;
        preco: number;
        ativo: boolean;
        id: number;
    };
    remover(id: string): {
        mensagem: string;
    };
}
