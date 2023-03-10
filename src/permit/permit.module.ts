import { Module } from "@nestjs/common";
import { PermitRepository } from "./permit.repository";
import { PermitService } from "./permit.service";
import { PermitController } from "./permit.controller";

@Module({
    providers: [PermitRepository, PermitService],
    controllers: [PermitController],
  })
  export class PermitModule {}