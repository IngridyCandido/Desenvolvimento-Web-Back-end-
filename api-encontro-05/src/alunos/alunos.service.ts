import { Injectable } from '@nestjs/common';

@Injectable()
export class AlunosService {
  private readonly alunos = [
    { id: 1, nome: 'Ingridy' },
    { id: 2, nome: 'Jose' },
    { id: 3, nome: 'Paulo' },
  ];

  listar() {
    return this.alunos;
  }
}
