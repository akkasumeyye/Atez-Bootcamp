import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Deals, DealsRelations, Stores} from '../models';
import {StoresRepository} from './stores.repository';

export class DealsRepository extends DefaultCrudRepository<
  Deals,
  typeof Deals.prototype.gameID,
  DealsRelations
> {

  public readonly dealbelongstostore: BelongsToAccessor<Stores, typeof Deals.prototype.gameID>;

  public readonly stores: BelongsToAccessor<Stores, typeof Deals.prototype.gameID>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('StoresRepository') protected storesRepositoryGetter: Getter<StoresRepository>,
  ) {
    super(Deals, dataSource);
    this.stores = this.createBelongsToAccessorFor('stores', storesRepositoryGetter,);
    this.registerInclusionResolver('stores', this.stores.inclusionResolver);
    this.dealbelongstostore = this.createBelongsToAccessorFor('dealbelongstostore', storesRepositoryGetter,);
    this.registerInclusionResolver('dealbelongstostore', this.dealbelongstostore.inclusionResolver);
  }
}
