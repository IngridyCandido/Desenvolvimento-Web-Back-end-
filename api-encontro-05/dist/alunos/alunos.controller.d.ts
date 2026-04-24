import { AlunosService } from './alunos.service';
export declare class AlunosController {
    private readonly alunosService;
    constructor(alunosService: AlunosService);
    listar(): {
        id: number;
        nome: string;
    }[];
}
