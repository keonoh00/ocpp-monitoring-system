import { Injectable } from '@nestjs/common';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientStatus } from './entities/clientStatus.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clients: Repository<Client>,

    @InjectRepository(ClientStatus)
    private readonly clientStatus: Repository<ClientStatus>,
  ) {}

  async getAllClients(): Promise<Client[]> {
    return this.clients.find();
  }

  async getAllClientStatus(): Promise<ClientStatus[]> {
    return this.clientStatus.find();
  }
}
