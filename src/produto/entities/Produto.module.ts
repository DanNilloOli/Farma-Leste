import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./Produto.entities";

@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})
export class produtoModule {}