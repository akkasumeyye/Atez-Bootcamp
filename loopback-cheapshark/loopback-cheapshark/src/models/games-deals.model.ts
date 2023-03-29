import {Entity, model, property} from '@loopback/repository';

@model()
export class GamesDeals extends Entity {
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
  dealsId?: number;

  constructor(data?: Partial<GamesDeals>) {
    super(data);
  }
}

export interface GamesDealsRelations {
  // describe navigational properties here
}

export type GamesDealsWithRelations = GamesDeals & GamesDealsRelations;
