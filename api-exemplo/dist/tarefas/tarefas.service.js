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
        {
            id: 1,
            titulo: 'Entender onde fica cada componente',
            descricao: 'Iniciar uma API e verificar onde fica o tipo tarefa, onde se concentra a regra de negócio,  (service evita que o controller fique carregado de lógica), onde estão as partes relacionadas da aplicação (módulo organiza controllers e services de um domínio específico) onde é recebido as requisições HTTP e definido os endpoints (controller deve ficar focado em entrada e saída de dados)',
            prioridade: 'alta',
            concluida: false,
        },
        {
            id: 2,
            titulo: 'Relacionar verbos HTTP',
            descricao: 'GET(leitura de dados), POST (criação de recurso), PUT (atualização completa de recurso), PATCH (atualização parcial de recurso), DELETE (remoção de recurso)',
            prioridade: 'media',
            concluida: true,
        },
        {
            id: 3,
            titulo: 'Entender parâmetro de rota x query string',
            descricao: 'Os parâmetros de rota são usados para identificar um recurso específico, enquanto a query string é usada para filtrar ou modificar a resposta',
            prioridade: 'baixa',
            concluida: false,
        },
        {
            id: 4,
            titulo: 'Criar endpoints',
            descricao: 'Criar endpoints para listar todas as tarefas, criar uma nova tarefa, atualizar uma tarefa existente e excluir uma tarefa',
            prioridade: 'alta',
            concluida: false,
        },
        {
            id: 5,
            titulo: 'Testar a API',
            descricao: 'Usar ferramentas como Thunder Client para testar os endpoints criados e garantir que estão funcionando corretamente',
            prioridade: 'media',
            concluida: false,
        },
    ];
    getTarefas() {
        return this.tarefas;
    }
    getTarefaPorId(id) {
        const tarefa = this.tarefas.find((tarefa) => tarefa.id === id);
        if (!tarefa) {
            throw new Error(`Tarefa com id ${id} não encontrada`);
        }
        return this.tarefas.find((tarefa) => tarefa.id === id);
    }
    listarTarefasConcluidas() {
        return this.tarefas.filter((tarefa) => tarefa.concluida);
    }
    listarTarefasPorPrioridade(nivel) {
        return this.tarefas.filter((tarefa) => tarefa.prioridade === nivel);
    }
    criarTarefa(tarefa) {
        const novaTarefa = {
            ...tarefa,
            id: this.tarefas.length + 1,
        };
        this.tarefas.push(novaTarefa);
        return novaTarefa;
    }
    atualizarPacialmenteTarefa(id, atualizacoes) {
        const tarefa = this.tarefas.find((tarefa) => tarefa.id === id);
        if (tarefa) {
            Object.assign(tarefa, atualizacoes);
            return tarefa;
        }
    }
    atualizarCompletamenteTarefa(id, tarefaAtualizada) {
        const index = this.tarefas.findIndex((tarefa) => tarefa.id === id);
        if (index === -1) {
            throw new Error(`Tarefa com id ${id} não encontrada`);
        }
        this.tarefas[index] = tarefaAtualizada;
        return tarefaAtualizada;
    }
    excluirTarefa(id) {
        const index = this.tarefas.findIndex((tarefa) => tarefa.id === id);
        if (index === -1) {
            throw new Error(`Tarefa com id ${id} não encontrada`);
        }
        this.tarefas.splice(index, 1);
        return { mensagem: `Tarefa ${id} removida com sucesso` };
    }
};
exports.TarefasService = TarefasService;
exports.TarefasService = TarefasService = __decorate([
    (0, common_1.Injectable)()
], TarefasService);
//# sourceMappingURL=tarefas.service.js.map