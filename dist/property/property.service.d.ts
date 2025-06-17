import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaService } from 'src/prisma.service';
import { Property } from '@prisma/client';
export declare class PropertyService {
    private prisma;
    constructor(prisma: PrismaService);
    create(property: CreatePropertyDto): import(".prisma/client").Prisma.Prisma__PropertyClient<{
        titulo: string;
        descripcion: string | null;
        imagen: string;
        banos: number;
        habitaciones: number;
        garajes: number;
        amueblado: boolean;
        ciudad: string;
        metrosCuadrados: number;
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): Promise<Property[]>;
    findByUserId(userId: number): Promise<Property[]>;
    update(id: number, data: UpdatePropertyDto, userId: number): Promise<{
        titulo: string;
        descripcion: string | null;
        imagen: string;
        banos: number;
        habitaciones: number;
        garajes: number;
        amueblado: boolean;
        ciudad: string;
        metrosCuadrados: number;
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number, userId: number): Promise<{
        titulo: string;
        descripcion: string | null;
        imagen: string;
        banos: number;
        habitaciones: number;
        garajes: number;
        amueblado: boolean;
        ciudad: string;
        metrosCuadrados: number;
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
