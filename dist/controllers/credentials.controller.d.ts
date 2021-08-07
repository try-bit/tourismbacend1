import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Credentials } from '../models';
import { CredentialsRepository } from '../repositories';
export declare class CredentialsController {
    credentialsRepository: CredentialsRepository;
    constructor(credentialsRepository: CredentialsRepository);
    create(credentials: Omit<Credentials, 'id'>): Promise<Credentials>;
    count(where?: Where<Credentials>): Promise<Count>;
    find(filter?: Filter<Credentials>): Promise<Credentials[]>;
    updateAll(credentials: Credentials, where?: Where<Credentials>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Credentials>): Promise<Credentials>;
    updateById(id: string, credentials: Credentials): Promise<void>;
    replaceById(id: string, credentials: Credentials): Promise<void>;
    deleteById(id: string): Promise<void>;
}
