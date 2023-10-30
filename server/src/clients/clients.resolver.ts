import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Client } from './entities/client.entity';
import { CreateClientDto } from './dtos/createClient.dto';
import { ClientStatus } from 'src/types/clients';
import { ClientService } from './clients.service';

const CLIENTS = [];

@Resolver(() => Client)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Query(() => [Client])
  async clients(): Promise<Client[]> {
    return await this.clientService.getAll();
  }

  @Query(() => Client)
  async client(@Args('clientId') clientId: number): Promise<Client> {
    return CLIENTS.find((client) => client.id === clientId);
  }

  @Query(() => String)
  async clientStatus(
    @Args('clientId') clientId: number,
  ): Promise<ClientStatus> {
    const client = CLIENTS.find((client) => client.id === clientId);
    return client.status;
  }

  @Mutation(() => Client)
  async createClient(
    @Args() createClientInput: CreateClientDto,
  ): Promise<Client> {
    const client = {
      ...createClientInput,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    CLIENTS.push(client);
    return client;
  }
}
