import { Module } from "@nestjs/common";
import { ContractController } from "./contract.controller";
import { ContractService } from "./contract.service";
import { ContractRepository } from "./contract.repository";

@Module({
    providers: [ContractService, ContractRepository],
    controllers: [ContractController],
  })
export class ContractModule {}