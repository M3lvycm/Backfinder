import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post()
  create(@Body() property: CreatePropertyDto) {
    return this.propertyService.create(property);
  }

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const propertyFound = await this.propertyService.findPropertyByID(
      Number(id),
    );
    if (!propertyFound)
      throw new NotFoundException(`Property with ID ${id} not found`);
    return propertyFound;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdatePropertyDto) {
    return this.propertyService.update(Number(id), data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.propertyService.remove(Number(id));
    } catch (error) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }
  }
}
