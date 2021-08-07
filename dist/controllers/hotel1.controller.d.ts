import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Hotel1 } from '../models';
import { Hotel1Repository } from '../repositories';
export declare class Hotel1Controller {
    hotel1Repository: Hotel1Repository;
    constructor(hotel1Repository: Hotel1Repository);
    create(hotel1: Omit<Hotel1, 'id'>): Promise<Hotel1>;
    count(where?: Where<Hotel1>): Promise<Count>;
    find(filter?: Filter<Hotel1>): Promise<Hotel1[]>;
    updateAll(hotel1: Hotel1, where?: Where<Hotel1>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Hotel1>): Promise<Hotel1>;
    updateById(id: string, hotel1: Hotel1): Promise<void>;
    replaceById(id: string, hotel1: Hotel1): Promise<void>;
    deleteById(id: string): Promise<void>;
}
