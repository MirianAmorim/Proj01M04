/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsString, IsDateString} from 'class-validator';

export class CreateParticipanteDto {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    imagem: string;

    @IsNotEmpty()
    @IsDateString()
    data_nascimento: string;

    @IsNotEmpty()
    @IsString()
    staff_ator: string;
}

