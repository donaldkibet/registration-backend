import { Controller, Get, Param, Query } from '@nestjs/common';
import { AddressService } from 'src/address/address.service';

@Controller('sub-county')
export class SubCountyController {
  constructor(private addressService: AddressService) {}

  @Get()
  findAllSubCounties(@Query('countyID') countyID) {
    if (countyID) {
      return this.addressService.findBySubCountiesByCountyId(countyID);
    }
    return this.addressService.findAllSubCounties();
  }

  @Get(':id')
  findSubCountyById(@Param() param) {
    return this.addressService.findSubCountiesById(param.id);
  }
}
