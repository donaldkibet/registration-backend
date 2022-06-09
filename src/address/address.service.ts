import addressJSON from './address.json';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressService {
  findAllCounties() {
    return addressJSON.counties;
  }

  findCountyById(countyId: string) {
    return addressJSON.counties.find((county) => county.id === countyId);
  }

  findAllWards() {
    return addressJSON.counties.flatMap((county) =>
      county.subCounties.flatMap((subCounty) => subCounty.wards),
    );
  }

  findWardById(wardId: string) {
    return addressJSON.counties.map((county) => county.id === wardId);
  }

  findAllWardsByCountyAndSubCountyID(countyID: string, subSubCountyID: string) {
    return (
      addressJSON.counties
        .find((county) => county.id === countyID)
        ?.subCounties?.find((subCounty) => subCounty.id === subSubCountyID)
        ?.wards ?? []
    );
  }

  findAllSubCounties() {
    return addressJSON.counties.flatMap((county) => county.subCounties ?? []);
  }

  findSubCountiesById(subCountyId: string) {
    return addressJSON.counties
      .flatMap((county) => county.subCounties)
      ?.find((subCounty) => subCounty.id === subCountyId);
  }

  findBySubCountiesByCountyId(countyId: string) {
    return (
      addressJSON.counties.find((county) => county.id === countyId)
        ?.subCounties ?? []
    );
  }
}
