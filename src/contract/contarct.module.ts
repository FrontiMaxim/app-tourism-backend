import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contract } from "./contract.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Contract])],
    providers: [],
    controllers: [],
  })
export class ContractModule {}