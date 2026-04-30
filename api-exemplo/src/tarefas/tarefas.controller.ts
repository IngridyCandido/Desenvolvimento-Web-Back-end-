import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Put,
  Param,
  Body,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import type { Tarefa } from './tarefas.service';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  getTarefas(): Tarefa[] {
    return this.tarefasService.getTarefas();
  }

  @Get('concluidas')
  listarTarefasConcluidas(): Tarefa[] {
    return this.tarefasService.listarTarefasConcluidas();
  }

  @Get('prioridade')
  listarTarefasPorPrioridade(
    @Query('nivel') nivel: 'baixa' | 'media' | 'alta',
  ): Tarefa[] {
    return this.tarefasService.listarTarefasPorPrioridade(nivel);
  }

  @Get(':id')
  getTarefaPorId(@Param('id', ParseIntPipe) id: number): Tarefa | undefined {
    return this.tarefasService.getTarefaPorId(id);
  }

  @Post()
  criarTarefa(@Body() tarefa: Tarefa): Tarefa {
    return this.tarefasService.criarTarefa(tarefa);
  }

  @Patch(':id')
  atualizarPacialmenteTarefa(
    @Param('id', ParseIntPipe) id: number,
    @Body() atualizacoes: Partial<Tarefa>,
  ): Tarefa | undefined {
    return this.tarefasService.atualizarPacialmenteTarefa(id, atualizacoes);
  }

  @Put(':id')
  atualizarCompletamenteTarefa(
    @Param('id', ParseIntPipe) id: number,
    @Body() tarefaAtualizada: Tarefa,
  ): Tarefa | undefined {
    return this.tarefasService.atualizarCompletamenteTarefa(
      id,
      tarefaAtualizada,
    );
  }

  @Delete(':id')
  excluirTarefa(@Param('id', ParseIntPipe) id: number): { mensagem: string } {
    return this.tarefasService.excluirTarefa(id);
  }
}
