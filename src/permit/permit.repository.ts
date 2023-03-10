import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Permit } from './permit.entity';


@Injectable()
export class PermitRepository extends Repository<Permit> {
    constructor(dataSource: DataSource) {
        super(Permit, dataSource.createEntityManager());
    }
}