import { Query, Resolver } from '@nestjs/graphql';
import { Client } from './entities/client.entity';
import { ClientService } from './clients.service';
import { ClientStatus } from './entities/clientStatus.entity';

@Resolver(() => Client)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Query(() => [Client])
  async clients(): Promise<Client[]> {
    return await this.clientService.getAllClients();
  }

  @Query(() => [ClientStatus])
  async clientStatus(): Promise<ClientStatus[]> {
    return await this.clientService.getAllClientStatus();
  }
}
