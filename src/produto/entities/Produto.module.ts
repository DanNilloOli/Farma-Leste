import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './Produto.entities';
import { ProdutoService } from '../services/produto.service';
import { ProdutoController } from '../controllers/produto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [ProdutoService],
  controllers: [ProdutoController],
})
export class ProdutoModule {}
