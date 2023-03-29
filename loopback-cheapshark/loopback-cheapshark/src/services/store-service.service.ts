import { Games } from './../models/games.model';
import { Stores } from './../models/stores.model';
import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {RestDataSource} from '../datasources';

export interface StoreService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  AllStores() : Promise<Stores>[];
}

export class StoreServiceProvider implements Provider<StoreService> {
  constructor(
    // rest must match the name property in the datasource json file
    @inject('datasources.rest')
    protected dataSource: RestDataSource = new RestDataSource(),
  ) {}

  value(): Promise<StoreService> {
    return getService(this.dataSource);
  }
}
