import { Contract } from "src/contract/contract.entity";
import { Permit } from "src/permit/permit.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({name: 'hotel'})
export class Hotel {
    @PrimaryGeneratedColumn({name: 'id', type: 'bigint'})
    id: number;

    @Column({name: 'name', type: 'varchar'})
    name: string;

    @Column({name: 'country', type: 'varchar'})
    country: string;

    @Column({name: 'city', type: 'varchar'})
    city: string;

    @Column({name: 'street', type: 'varchar'})
    street: string;

    @Column({name: 'home', type: 'varchar', length: 4})
    home: string;

    @Column({name: 'count_stars', type: 'smallint'})
    countStarts: number;

    @OneToMany(() => Permit, (permit) => permit.hotel, {nullable: true, onDelete: 'CASCADE'})
    permits: Permit[];
}