import { DefaultCrudRepository } from '@loopback/repository';
import { TourismDataSource } from '../datasources';
import { Credentials, CredentialsRelations } from '../models';
export declare class CredentialsRepository extends DefaultCrudRepository<Credentials, typeof Credentials.prototype.id, CredentialsRelations> {
    constructor(dataSource: TourismDataSource);
}
