import { Injectable, ForbiddenException } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaService } from 'src/prisma.service';
import { Property } from '@prisma/client';

@Injectable()
export class PropertyService {
  constructor(private prisma: PrismaService) {}

  create(property: CreatePropertyDto) {
    const { userId, imagen, ...rest } = property;

    return this.prisma.property.create({
      data: {
        ...rest,
        imagen, // Ahora directamente como string[]
        user: {
          connect: { id: userId },
        },
      },
    });
  }

  async findAll(): Promise<Property[]> {
    return this.prisma.property.findMany(); // imagen ya viene como string[]
  }

  async findByUserId(userId: number): Promise<Property[]> {
    return this.prisma.property.findMany({
      where: { userId },
    });
  }

  async update(id: number, data: UpdatePropertyDto, userId: number) {
    const property = await this.prisma.property.findUnique({ where: { id } });

    if (!property || property.userId !== userId) {
      throw new ForbiddenException('No puedes editar esta propiedad');
    }

    return this.prisma.property.update({
      where: { id },
      data, // imagen se pasa como string[] directamente
    });
  }

  async remove(id: number, userId: number) {
    const property = await this.prisma.property.findUnique({ where: { id } });

    if (!property || property.userId !== userId) {
      throw new ForbiddenException('No puedes eliminar esta propiedad');
    }

    return this.prisma.property.delete({
      where: { id },
    });
  }
}
