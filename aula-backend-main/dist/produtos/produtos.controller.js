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
exports.ProdutosController = void 0;
const common_1 = require("@nestjs/common");
const produtos_service_1 = require("./produtos.service");
let ProdutosController = class ProdutosController {
    produtosService;
    constructor(produtosService) {
        this.produtosService = produtosService;
    }
    listar(categoria, limite) {
        const limiteNumero = limite ? Number(limite) : undefined;
        if (limite && Number.isNaN(limiteNumero)) {
            throw new common_1.BadRequestException('Query "limite" deve ser numérica');
        }
        return this.produtosService.listar(categoria, limiteNumero);
    }
    buscarPorId(id) {
        const idNumero = Number(id);
        if (Number.isNaN(idNumero)) {
            throw new common_1.BadRequestException('Parâmetro "id" deve ser numérico');
        }
        return this.produtosService.buscarPorId(idNumero);
    }
    criar(body) {
        return this.produtosService.criar(body);
    }
    atualizarCompleto(id, body) {
        const idNumero = Number(id);
        if (Number.isNaN(idNumero)) {
            throw new common_1.BadRequestException('Parâmetro "id" deve ser numérico');
        }
        return this.produtosService.atualizarCompleto(idNumero, body);
    }
    atualizarParcial(id, body) {
        const idNumero = Number(id);
        if (Number.isNaN(idNumero)) {
            throw new common_1.BadRequestException('Parâmetro "id" deve ser numérico');
        }
        return this.produtosService.atualizarParcial(idNumero, body);
    }
    remover(id) {
        const idNumero = Number(id);
        if (Number.isNaN(idNumero)) {
            throw new common_1.BadRequestException('Parâmetro "id" deve ser numérico');
        }
        return this.produtosService.remover(idNumero);
    }
};
exports.ProdutosController = ProdutosController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('categoria')),
    __param(1, (0, common_1.Query)('limite')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "criar", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "atualizarCompleto", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "atualizarParcial", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "remover", null);
exports.ProdutosController = ProdutosController = __decorate([
    (0, common_1.Controller)('produtos'),
    __metadata("design:paramtypes", [produtos_service_1.ProdutosService])
], ProdutosController);
//# sourceMappingURL=produtos.controller.js.map