import { Client } from "src/client/client.entity";
import { Permit } from "src/permit/permit.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"

@Entity({name: 'contract'})
export class Contract {
    @PrimaryGeneratedColumn({name: 'id', type: 'bigint'})
    id: number;

    @Column({name: 'surname', type: 'varchar'})
    surname: string;

    @ManyToOne(() => Client, (client) => client.id, {nullable: false})
    @JoinColumn({ name: "id_client" })
    client: Client;

    @ManyToOne(() => Permit, (permit) => permit.id, {nullable: false})
    @JoinColumn({ name: "id_permit" })
    permit: Permit;
    
    @Column({name: 'date_conclusion', type: 'date'})
    dateConclusion: Date;
}