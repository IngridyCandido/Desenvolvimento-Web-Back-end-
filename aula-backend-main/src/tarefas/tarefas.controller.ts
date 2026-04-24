import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  listar(
    @Query('prioridade') prioridade?: string,
    @Query('limite') limite?: string,
  ) {
    const limiteNumero = limite ? Number(limite) : undefined;

    if (limite && Number.isNaN(limiteNumero)) {
      throw new BadRequestException('Query "limite" deve ser numérica');
    }

    return this.tarefasService.listar(prioridade, limiteNumero);
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    const idNumero = Number(id);

    if (Number.isNaN(idNumero)) {
      throw new BadRequestException('Parâmetro "id" deve ser numérico');
    }

    return this.tarefasService.buscarPorId(idNumero);
  }

  @Post()
  criar(
    @Body()
    body: {
      nome: string;
      prioridade: string;
      status: string;
    },
  ) {
    return this.tarefasService.criar(body);
  }

  @Put(':id')
  atualizarCompleto(
    @Param('id') id: string,
    @Body()
    body: {
      nome: string;
      prioridade: string;
      status: string;
    },
  ) {
    const idNumero = Number(id);

    if (Number.isNaN(idNumero)) {
      throw new BadRequestException('Parâmetro "id" deve ser numérico');
    }

    return this.tarefasService.atualizarCompleto(idNumero, body);
  }

  @Patch(':id')
  atualizarParcial(
    @Param('id') id: string,
    @Body()
    body: {
      nome?: string;
      prioridade?: string;
      status?: string;
    },
  ) {
    const idNumero = Number(id);

    if (Number.isNaN(idNumero)) {
      throw new BadRequestException('Parâmetro "id" deve ser numérico');
    }

    return this.tarefasService.atualizarParcial(idNumero, body);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    const idNumero = Number(id);

    if (Number.isNaN(idNumero)) {
      throw new BadRequestException('Parâmetro "id" deve ser numérico');
    }

    return this.tarefasService.remover(idNumero);
  }
}