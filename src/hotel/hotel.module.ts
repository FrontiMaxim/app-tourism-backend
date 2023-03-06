import { Module } from "@nestjs/common";
import { HotelController } from "./hotel.controller";
import { HotelService } from "./hotel.service";
import { HotelRepository } from "./hotel.repository";

@Module({
    providers: [HotelService, HotelRepository],
    controllers: [HotelController],
  })
export class HotelModule {}