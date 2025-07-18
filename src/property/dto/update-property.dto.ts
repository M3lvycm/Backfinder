import {
  IsString,
  IsOptional,
  IsBoolean,
  IsInt,
  IsNumber,
  IsArray,
} from 'class-validator';

export class UpdatePropertyDto {
  @IsString()
  @IsOptional()
  titulo?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

 @IsArray()
@IsString({ each: true })
imagen: string[];

  @IsInt()
  @IsOptional()
  banos?: number;

   @IsInt()
  @IsOptional()
  precio: number;

  @IsInt()
  @IsOptional()
  numeroContacto: number;

  @IsInt()
  @IsOptional()
  habitaciones?: number;

  @IsInt()
  @IsOptional()
  garajes?: number;

  @IsBoolean()
  @IsOptional()
  amueblado?: boolean;

  @IsString()
  @IsOptional()
  ciudad?: string;

  @IsNumber()
  @IsOptional()
  metrosCuadrados?: number;
}
