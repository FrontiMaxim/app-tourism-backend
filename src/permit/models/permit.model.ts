import { Discount } from "src/discount/discount.entity";
import { Hotel } from "src/hotel/hotel.entity";

export class PermitModel {
    id: number;
    price: number;
    timeStart: Date;
    timeFinish: Date;
    hotel: Hotel;
    discount: Discount;
}