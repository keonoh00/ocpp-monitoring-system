import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    ClientsModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
