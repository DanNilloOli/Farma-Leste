import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "./entities/Categoria.entity";

@Injectable()
export class CategoriaService {
    categoriaRepository: any;
    constructor(
        @InjectRepository(Categoria)
        private CategoriaRepository: Repository<Categoria>,) { }

    async findAll(): Promise<Categoria[]> {
        return await this.CategoriaRepository.find({});
    }

    async findById(id: number): Promise<Categoria> {
        let Categoria = await this.CategoriaRepository.findOne({
            where: {id},
        });
        if (!Categoria)
            throw new HttpException(
                'Opa... Categoria não encontrada!',
                HttpStatus.NOT_FOUND,
        );

        return Categoria;
    }

    async findByTipo(tipo: string): Promise<Categoria[]> {
        return await this.CategoriaRepository.find({
            where: {
                tipo: ILike(`${tipo}`)
            },
    })}

    async create(Categoria: Categoria): Promise<Categoria> {
        return await this.CategoriaRepository.save(Categoria);
    }

    async update(Categoria: Categoria): Promise<Categoria> {
        let buscaCategoria: Categoria = await this.findById(Categoria.id);

        if (!buscaCategoria || !Categoria.id)
            throw new HttpException(
                'Opa... Categoria não encontrada!',
                HttpStatus.NOT_FOUND,
            );

        return await this.CategoriaRepository.save(Categoria);
  }

    async delete(id: number): Promise<DeleteResult> {
        let buscaCategoria = await this.findById(id);
        if (!buscaCategoria)
            throw new HttpException('Opa... Categoria não encontrada!', HttpStatus.NOT_FOUND);
        return await this.CategoriaRepository.delete(id);
  }
}