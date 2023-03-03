import { Contract } from "src/contract/contract.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity({name: 'client'})
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

    @Column({name: 'city', type: 'varchar'})
    city: string;

    @Column({name: 'street', type: 'varchar'})
    street: string;

    @Column({name: 'home', type: 'varchar', length: 4})
    home: string;

    @Column({name: 'apartment', type: 'smallint', nullable: true})
    apartment: number;

    @Column({name: 'birthday', type: 'date'})
    birthday: Date;

    @OneToMany(() => Contract, (contract) => contract.client, {onDelete: 'CASCADE'})
    contracts: Contract[];
}