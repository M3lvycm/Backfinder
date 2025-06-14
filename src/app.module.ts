import { Module } from '@nestjs/common';
import { PropertyModule } from './property/property.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [PropertyModule, UsersModule, AuthModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
