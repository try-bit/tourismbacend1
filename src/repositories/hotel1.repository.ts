import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TourismDataSource} from '../datasources';
import {Hotel1, Hotel1Relations} from '../models';

export class Hotel1Repository extends DefaultCrudRepository<
  Hotel1,
  typeof Hotel1.prototype.id,
  Hotel1Relations
> {
  constructor(
    @inject('datasources.Tourism') dataSource: TourismDataSource,
  ) {
    super(Hotel1, dataSource);
  }
}
