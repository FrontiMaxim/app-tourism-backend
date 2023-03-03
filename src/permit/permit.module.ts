import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Permit } from "./permit.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Permit])],
    providers: [],
    controllers: [],
  })
  export class PermitModule {}