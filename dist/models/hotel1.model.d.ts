import { Entity } from '@loopback/repository';
export declare class Hotel1 extends Entity {
    id?: string;
    days_agra?: string;
    price_agra?: string;
    ppl_agra?: string;
    hotel_agra?: string;
    city_agra?: string;
    constructor(data?: Partial<Hotel1>);
}
export interface Hotel1Relations {
}
export declare type Hotel1WithRelations = Hotel1 & Hotel1Relations;
