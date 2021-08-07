import {Entity, model, property} from '@loopback/repository';

@model()
export class Car1 extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  day_agra?: string;

  @property({
    type: 'string',
  })
  desti_agra?: string;

  @property({
    type: 'string',
  })
  price_agra?: string;

  @property({
    type: 'string',
  })
  date_agra?: string;

  @property({
    type: 'string',
  })
  cartype_agra?: string;

  @property({
    type: 'string',
  })
  city_agra?: string;


  constructor(data?: Partial<Car1>) {
    super(data);
  }
}

export interface Car1Relations {
  // describe navigational properties here
}

export type Car1WithRelations = Car1 & Car1Relations;
