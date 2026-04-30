"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefasController = void 0;
const common_1 = require("@nestjs/common");
const tarefas_service_1 = require("./tarefas.service");
let TarefasController = class TarefasController {
    tarefasService;
    constructor(tarefasService) {
        this.tarefasService = tarefasService;
    }
    getTarefas() {
        return this.tarefasService.getTarefas();
    }
    listarTarefasConcluidas() {
        return this.tarefasService.listarTarefasConcluidas();
    }
    listarTarefasPorPrioridade(nivel) {
        return this.tarefasService.listarTarefasPorPrioridade(nivel);
    }
    getTarefaPorId(id) {
        return this.tarefasService.getTarefaPorId(id);
    }
    criarTarefa(tarefa) {
        return this.tarefasService.criarTarefa(tarefa);
    }
    atualizarPacialmenteTarefa(id, atualizacoes) {
        return this.tarefasService.atualizarPacialmenteTarefa(id, atualizacoes);
    }
    atualizarCompletamenteTarefa(id, tarefaAtualizada) {
        return this.tarefasService.atualizarCompletamenteTarefa(id, tarefaAtualizada);
    }
    excluirTarefa(id) {
        return this.tarefasService.excluirTarefa(id);
    }
};
exports.TarefasController = TarefasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], TarefasController.prototype, "getTarefas", null);
__decorate([
    (0, common_1.Get)('concluidas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], TarefasController.prototype, "listarTarefasConcluidas", null);
__decorate([
    (0, common_1.Get)('prioridade'),
    __param(0, (0, common_1.Query)('nivel')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], TarefasController.prototype, "listarTarefasPorPrioridade", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], TarefasController.prototype, "getTarefaPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], TarefasController.prototype, "criarTarefa", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_a = typeof Partial !== "undefined" && Partial) === "function" ? _a : Object]),
    __metadata("design:returntype", Object)
], TarefasController.prototype, "atualizarPacialmenteTarefa", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Object)
], TarefasController.prototype, "atualizarCompletamenteTarefa", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], TarefasController.prototype, "excluirTarefa", null);
exports.TarefasController = TarefasController = __decorate([
    (0, common_1.Controller)('tarefas'),
    __metadata("design:paramtypes", [tarefas_service_1.TarefasService])
], TarefasController);
//# sourceMappingURL=tarefas.controller.js.map