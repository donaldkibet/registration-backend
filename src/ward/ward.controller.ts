import { Controller, Get, Query } from '@nestjs/common';
import { AddressService } from 'src/address/address.service';

@Controller('ward')
export class WardController {
  constructor(private addressService: AddressService) {}

  @Get()
  findWardByCountyAndSubCountyID(@Query() param) {
    return this.addressService.findAllWardsByCountyAndSubCountyID(
      param.countyID,
      param.subCountyID,
    );
  }
}
