import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Deals, DealsRelations} from '../models';

export class DealsRepository extends DefaultCrudRepository<
  Deals,
  typeof Deals.prototype.gameID,
  DealsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Deals, dataSource);
  }
}
