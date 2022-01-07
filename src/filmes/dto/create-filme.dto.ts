/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsInt, IsString, IsDateString} from 'class-validator'
import { CreateGeneroDto } from 'src/generos/dto/create-genero.dto';
import { CreateParticipanteDto } from 'src/participantes/dto/create-participante.dto';

export class CreateFilmeDto {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    imagem: string;

    @IsNotEmpty()
    @IsDateString()
    data_lancamento: string;

    @IsNotEmpty()
    @IsInt()
    tempo_duracao: number;

    @IsNotEmpty()
    @IsInt()
    generoid: number;

    @IsNotEmpty()
    @IsInt()
    participanteid: number
}

