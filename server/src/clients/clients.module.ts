import { Module } from '@nestjs/common';
import { ClientResolver } from './clients.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { ClientService } from './clients.service';
import { ClientStatus } from './entities/clientStatus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client, ClientStatus])],
  providers: [ClientResolver, ClientService],
})
export class ClientsModule {}
