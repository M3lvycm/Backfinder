import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
export declare class PropertyController {
    private readonly propertyService;
    constructor(propertyService: PropertyService);
    create(property: CreatePropertyDto, req: any): import(".prisma/client").Prisma.Prisma__PropertyClient<{
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
    findAll(req: any): Promise<{
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
    }[]>;
    findByUserId(req: any): Promise<{
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
    }[]>;
    update(id: string, data: UpdatePropertyDto, req: any): Promise<{
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
    remove(id: string, req: any): Promise<{
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
