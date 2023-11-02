import { Injectable } from '@nestjs/common';
import { Server } from './entities/server.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServerService {
  constructor(
    @InjectRepository(Server) private readonly server: Repository<Server>,
  ) {}

  async getAll(): Promise<Server[]> {
    return this.server.find();
  }
}
