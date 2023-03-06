import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Contract } from './contract.entity';

@Injectable()
export class ContractRepository extends Repository<Contract> {
    constructor(dataSource: DataSource) {
        super(Contract, dataSource.createEntityManager());
    }
}