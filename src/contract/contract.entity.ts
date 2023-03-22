import { Client } from "src/client/client.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"

@Entity({name: 'contract'})
export class Contract {
    @PrimaryGeneratedColumn({name: 'id', type: 'bigint'})
    id: number;

    @Column({name: 'name_hotel', type: 'varchar'})
    nameHotel: string;

    @Column({name: 'address_hotel', type: 'varchar'})
    addressHotel: string;

    @Column({name: 'price_permit'})
    pricePermit: number;

    @Column({name: 'time_start', type: 'date'})
    timeStart: Date;

    @Column({name: 'time_finish', type: 'date'})
    timeFinish: Date;

    @Column({name: 'size_discount', type: 'smallint'})
    sizeDiscount: number;

    @Column({name: 'date_conclusion', type: 'date'})
    dateConclusion: Date;
    
    @ManyToOne(() => Client, (client) => client.id, {nullable: false})
    @JoinColumn({ name: "id_client" })
    client: Client;
}