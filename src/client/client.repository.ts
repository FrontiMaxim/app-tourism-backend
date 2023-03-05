import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Client } from './client.entity';

@Injectable()
export class ClientRepository extends Repository<Client> {
    constructor(dataSource: DataSource) {
        super(Client, dataSource.createEntityManager());
    }
}