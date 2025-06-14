import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Esto lo hace disponible globalmente
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
