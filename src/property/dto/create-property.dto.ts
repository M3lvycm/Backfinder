import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsInt,
  IsNumber,
} from 'class-validator';

export class CreatePropertyDto {

  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsOptional()
  descripcion?: string;
  

  @IsInt()
  @IsOptional()
  precio: number;

  
  @IsInt()
  @IsOptional()
  numeroContacto: number;
  
  @IsString()
  @IsNotEmpty()
  imagen: string;

  @IsInt()
  @IsNotEmpty()
  banos: number;

  @IsInt()
  @IsNotEmpty()
  habitaciones: number;

  @IsInt()
  @IsNotEmpty()
  garajes: number;

  @IsBoolean()
  @IsNotEmpty()
  amueblado: boolean;

  @IsString()
  @IsNotEmpty()
  ciudad: string;

  @IsNumber()
  @IsNotEmpty()
  metrosCuadrados: number;
  userId: number; 
}
