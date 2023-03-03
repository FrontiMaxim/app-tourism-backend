import { Contract } from "src/contract/contract.entity";
import { Discount } from "src/discount/discount.entity";
import { Hotel } from "src/hotel/hotel.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";

@Entity({name: 'permit'})
export class Permit {
    @PrimaryGeneratedColumn({name: 'id', type: 'bigint'})
    id: number;

    @Column({name: 'price', type: 'money'})
    price: string;

    @Column({name: 'time_start', type: 'date'})
    timeStart: Date;

    @Column({name: 'time_finish', type: 'date'})
    timeFinish: Date;

    @ManyToOne(() => Hotel, (hotel) => hotel.id, {nullable: false})
    @JoinColumn({ name: "id_hotel" })
    hotel: Hotel;

    @OneToMany(() => Contract, (contract) => contract.permit, {onDelete: 'CASCADE'})
    contracts: Contract[];

    @ManyToOne(() => Discount, (discount) => discount.id, {nullable: true})
    @JoinColumn({ name: "id_discount" })
    discount: Discount;
}