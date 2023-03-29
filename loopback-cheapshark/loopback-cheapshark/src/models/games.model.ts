import {Entity, model, property, hasMany} from '@loopback/repository';
import {Deals} from './deals.model';
import {GamesDeals} from './games-deals.model';
import {Stores} from './stores.model';
import {GamesStores} from './games-stores.model';

@model()
export class Games extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  cheapest?: number;

  @property({
    type: 'string',
  })
  cheapestID?: string;

  @property({
    type: 'string',
  })
  external?: string;

  @property({
    type: 'string',
  })
  inernalName?: string;

  @property({
    type: 'string',
  })
  thumb?: string;

  @hasMany(() => Deals, {through: {model: () => GamesDeals}})
  gamedeal: Deals[];

  @hasMany(() => Stores, {through: {model: () => GamesStores}})
  gamestore: Stores[];

  constructor(data?: Partial<Games>) {
    super(data);
  }
}

export interface GamesRelations {
  // describe navigational properties here
}

export type GamesWithRelations = Games & GamesRelations;
