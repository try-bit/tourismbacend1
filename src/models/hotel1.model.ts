import {Entity, model, property} from '@loopback/repository';

@model()
export class Hotel1 extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  days_agra?: string;

  @property({
    type: 'string',
  })
  price_agra?: string;

  @property({
    type: 'string',
  })
  ppl_agra?: string;

  @property({
    type: 'string',
  })
  hotel_agra?: string;

  @property({
    type: 'string',
  })
  city_agra?: string;


  constructor(data?: Partial<Hotel1>) {
    super(data);
  }
}

export interface Hotel1Relations {
  // describe navigational properties here
}

export type Hotel1WithRelations = Hotel1 & Hotel1Relations;
