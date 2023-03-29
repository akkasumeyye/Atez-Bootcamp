import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Stores} from './stores.model';

@model()
export class Deals extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  gameID?: number;

  @property({
    type: 'number',
  })
  steamAppID?: number;

  @property({
    type: 'string',
  })
  normalPrice?: string;

  @property({
    type: 'string',
  })
  savings?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  internalName?: string;

  @property({
    type: 'date',
  })
  releaseDate?: Date;

  @property({
    type: 'string',
  })
  thumb?: string;

  @property({
    type: 'string',
  })
  salePrice?: string;

  @property({
    type: 'number',
  })
  storeID?: number;
  
 constructor(data?: Partial<Deals>) {
    super(data);
  }
}

export interface DealsRelations {
  // describe navigational properties here
}

export type DealsWithRelations = Deals & DealsRelations;
