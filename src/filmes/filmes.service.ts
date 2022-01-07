import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Filme } from '@prisma/client';

@Injectable()
export class FilmesService {
  constructor(private readonly prisma: PrismaService) {}

  async createPrisma(createFilmeDto: CreateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.create({
      data: { ...createFilmeDto },
    });
  }

  async findAllPrisma(): Promise<Filme[]> {
    return await this.prisma.filme.findMany();
  }

  async findOnePrisma(id: number): Promise<Filme> {
    return await this.prisma.filme.findUnique({
      where: { id },
    });
  }

  async updateOnePrisma(
    id: number,
    updateFilmeDto: UpdateFilmeDto,
  ): Promise<Filme> {
    return await this.prisma.filme.update({
      data: { ...updateFilmeDto },
      where: { id },
    });
  }

  async removeOnePrisma(id: number) {
    return await this.prisma.filme.delete({
      where: { id },
    });
  }
}