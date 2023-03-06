import { Client } from "src/client/client.entity";

export class ContractModel {
    id?: number;
    nameHotel: string;
    addressHotel: string;
    pricePermit: number;
    timeStart: Date;
    timeFinish: Date;
    sizeDiscount: number;
    dateConclusion: Date;
    client: Client;
}