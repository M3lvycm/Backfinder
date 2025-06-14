import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

import { PrismaService } from 'src/prisma.service';
import { Property } from '@prisma/client';
@Injectable()
export class PropertyService {
  constructor(private prisma: PrismaService) {}
  create(property: CreatePropertyDto) {
    const { userId, ...rest } = property;
    return this.prisma.property.create({
      data: {
        ...rest,
        user: {
          connect: { id: userId },
        },
      },
    });
  }
  

  findAll(): Promise<Property[]> {
    return this.prisma.property.findMany();
  }

  findPropertyByID(id: number): Promise<Property | null> {
    return this.prisma.property.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, data: UpdatePropertyDto): Promise<Property> {
    return this.prisma.property.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number): Promise<Property> {
    return this.prisma.property.delete({
      where: {
        id,
      },
    });
  }
}
