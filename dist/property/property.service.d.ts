import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaService } from 'src/prisma.service';
import { Property } from '@prisma/client';
export declare class PropertyService {
    private prisma;
    constructor(prisma: PrismaService);
    create(property: CreatePropertyDto): import(".prisma/client").Prisma.Prisma__PropertyClient<{
        id: number;
        titulo: string;
        descripcion: string | null;
        imagen: string;
        banos: number;
        habitaciones: number;
        garajes: number;
        amueblado: boolean;
        ciudad: string;
        metrosCuadrados: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): Promise<Property[]>;
    findByUserId(userId: number): Promise<Property[]>;
    update(id: number, data: UpdatePropertyDto, userId: number): Promise<{
        id: number;
        titulo: string;
        descripcion: string | null;
        imagen: string;
        banos: number;
        habitaciones: number;
        garajes: number;
        amueblado: boolean;
        ciudad: string;
        metrosCuadrados: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }>;
    remove(id: number, userId: number): Promise<{
        id: number;
        titulo: string;
        descripcion: string | null;
        imagen: string;
        banos: number;
        habitaciones: number;
        garajes: number;
        amueblado: boolean;
        ciudad: string;
        metrosCuadrados: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }>;
}
