import { Discount } from "src/discount/discount.entity";
import { Hotel } from "src/hotel/hotel.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity({name: 'permit'})
export class Permit {
    @PrimaryGeneratedColumn({name: 'id', type: 'bigint'})
    id: number;

    @Column({name: 'price'})
    price: number;

    @Column({name: 'time_start', type: 'date'})
    timeStart: Date;

    @Column({name: 'time_finish', type: 'date'})
    timeFinish: Date;

    @ManyToOne(() => Hotel, (hotel) => hotel.id, {nullable: false, onDelete: 'CASCADE'})
    @JoinColumn({ name: "id_hotel" })
    hotel: Hotel;

    @ManyToOne(() => Discount, (discount) => discount.id, {nullable: true, onDelete: 'SET NULL'})
    @JoinColumn({ name: "id_discount"})
    discount: Discount;
}