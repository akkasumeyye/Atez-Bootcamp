import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {GamesStores, GamesStoresRelations} from '../models';

export class GamesStoresRepository extends DefaultCrudRepository<
  GamesStores,
  typeof GamesStores.prototype.id,
  GamesStoresRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(GamesStores, dataSource);
  }
}
