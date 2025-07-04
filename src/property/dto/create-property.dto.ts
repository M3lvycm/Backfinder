import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsInt,
  IsNumber,
  IsArray,
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

 @IsArray()
@IsString({ each: true })
imagen: string[];

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
