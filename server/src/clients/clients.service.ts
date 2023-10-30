import { Injectable } from '@nestjs/common';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private readonly clients: Repository<Client>,
  ) {}

  async getAll(): Promise<Client[]> {
    return this.clients.find();
  }
}
