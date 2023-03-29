import { Contract } from "src/contract/contract.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from "typeorm"

@Entity({name: 'client'})
@Unique(["passportNumber", "passportSeries"])
export class Client {
    @PrimaryGeneratedColumn({name: 'id', type: 'bigint'})
    id: number;

    @Column({name: 'surname', type: 'varchar'})
    surname: string;

    @Column({name: 'name', type: 'varchar'})
    name: string;

    @Column({name: 'patronymic', type: 'varchar'})
    patronymic: string;

    @Column({name: 'phone', type: 'varchar'})
    phone: string;

    @Column({name: 'birthday', type: 'date'})
    birthday: Date;

    @Column({name: 'passport_number', type: 'varchar', length: 6})
    passportNumber: string;

    @Column({name: 'passport_series', type: 'varchar', length: 4})
    passportSeries: string;

    @OneToMany(() => Contract, (contract) => contract.client)
    contracts: Contract[];
}