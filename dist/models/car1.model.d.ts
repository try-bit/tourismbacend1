import { Entity } from '@loopback/repository';
export declare class Car1 extends Entity {
    id?: string;
    day_agra?: string;
    desti_agra?: string;
    price_agra?: string;
    date_agra?: string;
    cartype_agra?: string;
    city_agra?: string;
    constructor(data?: Partial<Car1>);
}
export interface Car1Relations {
}
export declare type Car1WithRelations = Car1 & Car1Relations;
