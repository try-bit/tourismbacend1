import { DefaultCrudRepository } from '@loopback/repository';
import { TourismDataSource } from '../datasources';
import { Hotel1, Hotel1Relations } from '../models';
export declare class Hotel1Repository extends DefaultCrudRepository<Hotel1, typeof Hotel1.prototype.id, Hotel1Relations> {
    constructor(dataSource: TourismDataSource);
}
