import {Entity, model, property, hasMany} from '@loopback/repository';
import {Deals} from './deals.model';

@model()
export class Stores extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  storeID?: number;

  @property({
    type: 'string',
    required: true,
  })
  storeName: string;

  @property({
    type: 'boolean',
  })
  isActive?: boolean;

  @property({
    type: 'string',
  })
  images?: string;

  @hasMany(() => Deals)
  storedeal: Deals[];

  constructor(data?: Partial<Stores>) {
    super(data);
  }
}

export interface StoresRelations {
  // describe navigational properties here
}

export type StoresWithRelations = Stores & StoresRelations;
