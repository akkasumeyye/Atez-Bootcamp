import { Filter } from '@loopback/repository';
import { Deals } from './../models/deals.model';
import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {RestDataSource} from '../datasources';

export interface DealsService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  findDealsByTitle(title : string): Promise<Deals[]>;
  AllDeals () : Promise<Deals[]>;
  findStoreByCheapestPrice(storeID : number | undefined , upperPrice:string | undefined): Promise<object>
}

export class DealsServiceProvider implements Provider<DealsService> {
  constructor(
    // rest must match the name property in the datasource json file
    @inject('datasources.rest')
    protected dataSource: RestDataSource = new RestDataSource(),
  ) {}

  value(): Promise<DealsService> {
    return getService(this.dataSource);
  }
}
