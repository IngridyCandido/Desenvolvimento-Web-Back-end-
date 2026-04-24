"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefasService = void 0;
const common_1 = require("@nestjs/common");
let TarefasService = class TarefasService {
    tarefas = [
        { id: 1, nome: 'Beber água', prioridade: 'média', status: 'Concluída' },
        { id: 2, nome: 'Estudar', prioridade: 'alta', status: 'Não concluída' },
        { id: 3, nome: 'Jogar', prioridade: 'baixa', status: 'Não concluída' },
        { id: 4, nome: 'Viajar', prioridade: 'baixa', status: 'Não concluída' }
    ];
    listar(prioridade, limite) {
        let resultado = [...this.tarefas];
        if (prioridade) {
            resultado = resultado.filter((p) => p.prioridade === prioridade);
        }
        if (limite && limite > 0) {
            resultado = resultado.slice(0, limite);
        }
        return resultado;
    }
    buscarPorId(id) {
        const Tarefa = this.tarefas.find((p) => p.id === id);
        if (!Tarefa) {
            throw new common_1.NotFoundException('Tarefa não encontrado');
        }
        return Tarefa;
    }
    criar(dados) {
        const novoId = this.tarefas.length > 0
            ? Math.max(...this.tarefas.map((p) => p.id)) + 1
            : 1;
        const novoTarefa = { id: novoId, ...dados };
        this.tarefas.push(novoTarefa);
        return novoTarefa;
    }
    atualizarCompleto(id, dados) {
        const indice = this.tarefas.findIndex((p) => p.id === id);
        if (indice === -1) {
            throw new common_1.NotFoundException('Tarefa não encontrada.');
        }
        const atualizado = { id, ...dados };
        this.tarefas[indice] = atualizado;
        return atualizado;
    }
    atualizarParcial(id, dados) {
        const tarefa = this.buscarPorId(id);
        const atualizado = { ...tarefa, ...dados };
        this.tarefas = this.tarefas.map((p) => (p.id === id ? atualizado : p));
        return atualizado;
    }
    remover(id) {
        const existe = this.tarefas.some((p) => p.id === id);
        if (!existe) {
            throw new common_1.NotFoundException('Tarefa não encontrada.');
        }
        this.tarefas = this.tarefas.filter((p) => p.id !== id);
        return { mensagem: `Tarefa com ID: ${id} removido com sucesso` };
    }
};
exports.TarefasService = TarefasService;
exports.TarefasService = TarefasService = __decorate([
    (0, common_1.Injectable)()
], TarefasService);
//# sourceMappingURL=tarefas.service.js.map