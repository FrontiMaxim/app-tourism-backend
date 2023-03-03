import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Discount } from "./discount.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Discount])],
    providers: [],
    controllers: [],
  })
  export class DiscountModule {}