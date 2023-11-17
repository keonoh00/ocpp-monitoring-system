import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { Client } from './clients/entities/client.entity';
import { ServerModule } from './server/server.module';
import { Server } from './server/entities/server.entity';
import { ClientStatus } from './clients/entities/clientStatus.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'ocpp',
      synchronize: true,
      logging: true,
      entities: [Client, Server, ClientStatus],
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ClientsModule,
    ServerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
