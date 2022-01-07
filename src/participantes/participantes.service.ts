/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Participante } from '@prisma/client';

@Injectable()
export class ParticipantesService {
  constructor(private readonly prisma: PrismaService) {}

  createOnePrisma(
    createParticipanteDto: CreateParticipanteDto,
  ): Promise<Participante> {
    return this.prisma.participante.create({
      data: { ...createParticipanteDto },
    });
  }

  findAllPrisma(): Promise<Participante[]> {
    return this.prisma.participante.findMany();
  }

  findOnePrisma(id: number): Promise<Participante> {
    return this.prisma.participante.findUnique({
      where: { id },
    });
  }

  updateOnePrisma(
    id: number,
    updateParticipanteDto: UpdateParticipanteDto,
  ): Promise<Participante> {
    return this.prisma.participante.update({
      data: { ...updateParticipanteDto },
      where: { id },
    });
  }

  removeOnePrisma(id: number) {
    return `Participante de id: ${id} deletado com sucesso`;
  }
}