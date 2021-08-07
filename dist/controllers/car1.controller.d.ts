import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Car1 } from '../models';
import { Car1Repository } from '../repositories';
export declare class Car1Controller {
    car1Repository: Car1Repository;
    constructor(car1Repository: Car1Repository);
    create(car1: Omit<Car1, 'id'>): Promise<Car1>;
    count(where?: Where<Car1>): Promise<Count>;
    find(filter?: Filter<Car1>): Promise<Car1[]>;
    updateAll(car1: Car1, where?: Where<Car1>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Car1>): Promise<Car1>;
    updateById(id: string, car1: Car1): Promise<void>;
    replaceById(id: string, car1: Car1): Promise<void>;
    deleteById(id: string): Promise<void>;
}
