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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefasController = void 0;
const common_1 = require("@nestjs/common");
const tarefas_service_1 = require("./tarefas.service");
let TarefasController = class TarefasController {
    tarefasService;
    constructor(tarefasService) {
        this.tarefasService = tarefasService;
    }
    listar(prioridade, limite) {
        const limiteNumero = limite ? Number(limite) : undefined;
        if (limite && Number.isNaN(limiteNumero)) {
            throw new common_1.BadRequestException('Query "limite" deve ser numérica');
        }
        return this.tarefasService.listar(prioridade, limiteNumero);
    }
    buscarPorId(id) {
        const idNumero = Number(id);
        if (Number.isNaN(idNumero)) {
            throw new common_1.BadRequestException('Parâmetro "id" deve ser numérico');
        }
        return this.tarefasService.buscarPorId(idNumero);
    }
    criar(body) {
        return this.tarefasService.criar(body);
    }
    atualizarCompleto(id, body) {
        const idNumero = Number(id);
        if (Number.isNaN(idNumero)) {
            throw new common_1.BadRequestException('Parâmetro "id" deve ser numérico');
        }
        return this.tarefasService.atualizarCompleto(idNumero, body);
    }
    atualizarParcial(id, body) {
        const idNumero = Number(id);
        if (Number.isNaN(idNumero)) {
            throw new common_1.BadRequestException('Parâmetro "id" deve ser numérico');
        }
        return this.tarefasService.atualizarParcial(idNumero, body);
    }
    remover(id) {
        const idNumero = Number(id);
        if (Number.isNaN(idNumero)) {
            throw new common_1.BadRequestException('Parâmetro "id" deve ser numérico');
        }
        return this.tarefasService.remover(idNumero);
    }
};
exports.TarefasController = TarefasController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('prioridade')),
    __param(1, (0, common_1.Query)('limite')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "criar", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "atualizarCompleto", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "atualizarParcial", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TarefasController.prototype, "remover", null);
exports.TarefasController = TarefasController = __decorate([
    (0, common_1.Controller)('tarefas'),
    __metadata("design:paramtypes", [tarefas_service_1.TarefasService])
], TarefasController);
//# sourceMappingURL=tarefas.controller.js.map