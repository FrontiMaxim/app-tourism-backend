import { Permit } from "src/permit/permit.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity({name: 'discount'})
export class Discount {
    @PrimaryGeneratedColumn({name: 'id', type: 'bigint'})
    id: number;

    @Column({name: 'time_finish', type: 'date'})
    timeFinish: Date;

    @Column({name: 'size', type: 'smallint'})
    size: number;

    @OneToMany(() => Permit, (permit) => permit.discount, {nullable: true})
    permits: Permit[];
}