"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let PropertyService = class PropertyService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(property) {
        const { userId, imagen, ...rest } = property;
        return this.prisma.property.create({
            data: {
                ...rest,
                imagen,
                user: {
                    connect: { id: userId },
                },
            },
        });
    }
    async findAll() {
        return this.prisma.property.findMany();
    }
    async findByUserId(userId) {
        return this.prisma.property.findMany({
            where: { userId },
        });
    }
    async update(id, data, userId) {
        const property = await this.prisma.property.findUnique({ where: { id } });
        if (!property || property.userId !== userId) {
            throw new common_1.ForbiddenException('No puedes editar esta propiedad');
        }
        return this.prisma.property.update({
            where: { id },
            data,
        });
    }
    async remove(id, userId) {
        const property = await this.prisma.property.findUnique({ where: { id } });
        if (!property || property.userId !== userId) {
            throw new common_1.ForbiddenException('No puedes eliminar esta propiedad');
        }
        return this.prisma.property.delete({
            where: { id },
        });
    }
};
exports.PropertyService = PropertyService;
exports.PropertyService = PropertyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PropertyService);
//# sourceMappingURL=property.service.js.map