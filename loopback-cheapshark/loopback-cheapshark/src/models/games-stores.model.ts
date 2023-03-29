import {Entity, model, property} from '@loopback/repository';

@model()
export class GamesStores extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  gamesId?: number;

  @property({
    type: 'number',
  })
  storesId?: number;

  constructor(data?: Partial<GamesStores>) {
    super(data);
  }
}

export interface GamesStoresRelations {
  // describe navigational properties here
}

export type GamesStoresWithRelations = GamesStores & GamesStoresRelations;
