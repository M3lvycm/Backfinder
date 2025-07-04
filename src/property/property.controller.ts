import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Request,
  UseGuards,
  Req,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() property: CreatePropertyDto, @Request() req) {
    return this.propertyService.create({
      ...property,
      userId: req.user.userId,
    });
  }

  @Get()
  findAll(@Req() req: any) {
    return this.propertyService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('by-user')
  findByUserId(@Req() req: any) {
    return this.propertyService.findByUserId(Number(req.user.userId));
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() data: UpdatePropertyDto,
    @Request() req,
  ) {
    return this.propertyService.update(Number(id), data, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.propertyService.remove(Number(id), req.user.userId);
  }
}
