import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "./client.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Client])],
    providers: [],
    controllers: [],
  })
  export class ClientModule {}