import { Module } from "@nestjs/common";
import { DiscountController } from "./discount.controller";
import { DiscountRepository } from "./discount.repository";
import { DiscountService } from "./discount.service";

@Module({
    providers: [DiscountRepository, DiscountService],
    controllers: [DiscountController],
})
export class DiscountModule {}