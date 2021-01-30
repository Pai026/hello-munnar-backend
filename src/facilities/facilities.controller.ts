import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';
import { FacilitiesService } from './facilities.service';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { CreateTypeDto } from './dto/create-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Facilities Management')
@Controller('/api/v1/facilities')
export class FacilitiesController {
  constructor(private readonly facilitiesService: FacilitiesService) {}

  @Post('type')
  createType(@Body() createTypeDto: CreateTypeDto) {
    return this.facilitiesService.createType(createTypeDto);
  }

  @Post()
  createFacility(@Body() createFacilityDto: CreateFacilityDto) {
    return this.facilitiesService.createFacility(createFacilityDto);
  }

  @Get('type')
  findAllTypes() {
    return this.facilitiesService.findAllTypes();
  }

  @Get('type/:typeId')
  findOne(@Param('typeId') id: number) {
    return this.facilitiesService.findTypeById(+id);
  }

  @Get('/:id')
  getFacilityById(@Param('id', ParseIntPipe) id: number) {
    return this.facilitiesService.getFacilityById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFacilityDto: UpdateFacilityDto,
  ) {
    return this.facilitiesService.update(+id, updateFacilityDto);
  }
  @Delete(':id')
  deleteFacility(@Param('id') id: string) {
    return this.facilitiesService.deleteFacility(+id);
  }

  @Patch('update/:typeId')
  updateOne(@Param('typeId') id: number, @Body() data: CreateTypeDto) {
    return this.facilitiesService.updateType(+id, data);
  }
}
