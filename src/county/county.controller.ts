import { Controller, Get, Param } from '@nestjs/common';
import { AddressService } from 'src/address/address.service';

@Controller('county')
export class CountyController {
  constructor(private addressService: AddressService) {}
  @Get()
  findAll() {
    return this.addressService.findAllCounties();
  }

  @Get(':id')
  findByCountyID(@Param() params) {
    return this.addressService.findCountyById(params.id);
  }
}
