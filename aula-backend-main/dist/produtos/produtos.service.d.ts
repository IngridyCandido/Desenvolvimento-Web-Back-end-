type Produto = {
    id: number;
    nome: string;
    categoria: string;
    preco: number;
    ativo: boolean;
};
export declare class ProdutosService {
    private produtos;
    listar(categoria?: string, limite?: number): Produto[];
    buscarPorId(id: number): Produto;
    criar(dados: Omit<Produto, 'id'>): Produto;
    atualizarCompleto(id: number, dados: Omit<Produto, 'id'>): Produto;
    atualizarParcial(id: number, dados: Partial<Omit<Produto, 'id'>>): {
        nome: string;
        categoria: string;
        preco: number;
        ativo: boolean;
        id: number;
    };
    remover(id: number): {
        mensagem: string;
    };
}
export {};
