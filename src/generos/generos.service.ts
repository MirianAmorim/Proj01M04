import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Genero } from '@prisma/client';

@Injectable()
export class GenerosService {
  constructor(private readonly prisma: PrismaService) {}

  createOnePrisma(createGeneroDto: CreateGeneroDto): Promise<Genero> {
    return this.prisma.genero.create({
      data: { ...createGeneroDto },
    });
  }

  findAllPrisma(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  findOnePrisma(id: number): Promise<Genero> {
    return this.prisma.genero.findUnique({ where: { id } });
  }

  updateOnePrisma(
    id: number,
    updateGeneroDto: UpdateGeneroDto,
  ): Promise<Genero> {
    return this.prisma.genero.update({
      data: { ...updateGeneroDto },
      where: { id },
    });
  }

  removeOnePrisma(id: number) {
    return this.prisma.genero.delete({ where: { id } });
  }
}
