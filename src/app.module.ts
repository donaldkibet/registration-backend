import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressService } from './address/address.service';
import { CountyController } from './county/county.controller';
import { SubCountyController } from './sub-county/sub-county.controller';
import { WardController } from './ward/ward.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    CountyController,
    SubCountyController,
    WardController,
  ],
  providers: [AppService, AddressService],
})
export class AppModule {}
