import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TourismDataSource} from '../datasources';
import {Car1, Car1Relations} from '../models';

export class Car1Repository extends DefaultCrudRepository<
  Car1,
  typeof Car1.prototype.id,
  Car1Relations
> {
  constructor(
    @inject('datasources.Tourism') dataSource: TourismDataSource,
  ) {
    super(Car1, dataSource);
  }
}
