import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Games, GamesRelations} from '../models';

export class GamesRepository extends DefaultCrudRepository<
  Games,
  typeof Games.prototype.id,
  GamesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Games, dataSource);
  }
}
