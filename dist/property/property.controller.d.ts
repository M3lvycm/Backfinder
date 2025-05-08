import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
export declare class PropertyController {
    private readonly propertyService;
    constructor(propertyService: PropertyService);
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
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): Promise<{
        titulo: string;
        descripcion: string | null;
        imagen: string;
        banos: number;
        habitaciones: number;
        garajes: number;
        amueblado: boolean;
        ciudad: string;
        metrosCuadrados: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        titulo: string;
        descripcion: string | null;
        imagen: string;
        banos: number;
        habitaciones: number;
        garajes: number;
        amueblado: boolean;
        ciudad: string;
        metrosCuadrados: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: UpdatePropertyDto): Promise<{
        titulo: string;
        descripcion: string | null;
        imagen: string;
        banos: number;
        habitaciones: number;
        garajes: number;
        amueblado: boolean;
        ciudad: string;
        metrosCuadrados: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        titulo: string;
        descripcion: string | null;
        imagen: string;
        banos: number;
        habitaciones: number;
        garajes: number;
        amueblado: boolean;
        ciudad: string;
        metrosCuadrados: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
