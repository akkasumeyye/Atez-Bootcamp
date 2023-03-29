import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {GamesDeals, GamesDealsRelations} from '../models';

export class GamesDealsRepository extends DefaultCrudRepository<
  GamesDeals,
  typeof GamesDeals.prototype.id,
  GamesDealsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(GamesDeals, dataSource);
  }
}
