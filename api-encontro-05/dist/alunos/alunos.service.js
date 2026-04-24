"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunosService = void 0;
const common_1 = require("@nestjs/common");
let AlunosService = class AlunosService {
    alunos = [
        { id: 1, nome: 'Ingridy' },
        { id: 2, nome: 'Jose' },
        { id: 3, nome: 'Paulo' },
    ];
    listar() {
        return this.alunos;
    }
};
exports.AlunosService = AlunosService;
exports.AlunosService = AlunosService = __decorate([
    (0, common_1.Injectable)()
], AlunosService);
//# sourceMappingURL=alunos.service.js.map