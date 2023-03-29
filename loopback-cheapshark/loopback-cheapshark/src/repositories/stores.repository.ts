import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Stores, StoresRelations} from '../models';

export class StoresRepository extends DefaultCrudRepository<
  Stores,
  typeof Stores.prototype.storeID,
  StoresRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Stores, dataSource);
  }
}
