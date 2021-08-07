import { Entity } from '@loopback/repository';
export declare class Credentials extends Entity {
    id?: string;
    name?: string;
    password?: string;
    constructor(data?: Partial<Credentials>);
}
export interface CredentialsRelations {
}
export declare type CredentialsWithRelations = Credentials & CredentialsRelations;
