/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsInt, IsString} from 'class-validator';

export class CreateGeneroDto {
    @IsNotEmpty()
    @IsString()
    nome: string
}

