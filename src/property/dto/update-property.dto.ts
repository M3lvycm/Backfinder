import {
  IsString,
  IsOptional,
  IsBoolean,
  IsInt,
  IsNumber,
} from 'class-validator';

export class UpdatePropertyDto {
  @IsString()
  @IsOptional()
  titulo?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  imagen?: string;

  @IsInt()
  @IsOptional()
  banos?: number;

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
