import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { Produto } from './produto/entities/produto.entities';
import { produtoModule } from './produto/entities/Produto.module';
import { categoriaModule } from './categoria/entities/Categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farma_leste',
      entities: [Categoria, Produto],
      synchronize: true,
    }),
    categoriaModule,
    produtoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

