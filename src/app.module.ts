import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClientModule } from "./client/client.module";
import { ContractModule } from "./contract/contarct.module";
import { Client } from "./client/client.entity";
import { Contract } from "./contract/contract.entity";
import { Hotel } from "./hotel/hotel.entity";
import { Permit } from "./permit/permit.entity";
import { Discount } from "./discount/discount.entity";
import { HotelModule } from "./hotel/hotel.module";
import { PermitModule } from "./permit/permit.module";
import { DiscountModule } from "./discount/discount.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
    imports: [
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '..', 'static', 'client'),
        renderPath: '/'
      }),
      ConfigModule.forRoot({
        envFilePath: '.env'
      }),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [Client, Hotel, Permit, Discount, Contract],
        synchronize: false
      }),
      ClientModule,
      ContractModule,
      HotelModule,
      PermitModule,
      DiscountModule
    ]
})
export class AppModule {}