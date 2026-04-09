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
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  listar(
    @Query('categoria') categoria?: string,
    @Query('limite') limite?: string,
  ) {
    const limiteNumero = limite ? Number(limite) : undefined;

    if (limite && Number.isNaN(limiteNumero)) {
      throw new BadRequestException('Query "limite" deve ser numérica');
    }

    return this.produtosService.listar(categoria, limiteNumero);
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    const idNumero = Number(id);

    if (Number.isNaN(idNumero)) {
      throw new BadRequestException('Parâmetro "id" deve ser numérico');
    }

    return this.produtosService.buscarPorId(idNumero);
  }

  @Post()
  criar(
    @Body()
    body: {
      nome: string;
      categoria: string;
      preco: number;
      ativo: boolean;
    },
  ) {
    return this.produtosService.criar(body);
  }

  @Put(':id')
  atualizarCompleto(
    @Param('id') id: string,
    @Body()
    body: {
      nome: string;
      categoria: string;
      preco: number;
      ativo: boolean;
    },
  ) {
    const idNumero = Number(id);

    if (Number.isNaN(idNumero)) {
      throw new BadRequestException('Parâmetro "id" deve ser numérico');
    }

    return this.produtosService.atualizarCompleto(idNumero, body);
  }

  @Patch(':id')
  atualizarParcial(
    @Param('id') id: string,
    @Body()
    body: {
      nome?: string;
      categoria?: string;
      preco?: number;
      ativo?: boolean;
    },
  ) {
    const idNumero = Number(id);

    if (Number.isNaN(idNumero)) {
      throw new BadRequestException('Parâmetro "id" deve ser numérico');
    }

    return this.produtosService.atualizarParcial(idNumero, body);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    const idNumero = Number(id);

    if (Number.isNaN(idNumero)) {
      throw new BadRequestException('Parâmetro "id" deve ser numérico');
    }

    return this.produtosService.remover(idNumero);
  }
}