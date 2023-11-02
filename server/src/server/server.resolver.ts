import { Args, Query, Resolver } from '@nestjs/graphql';
import { Server } from './entities/server.entity';
import { ServerService } from './server.service';
import { ServerStatus } from 'src/types/server';

const CLIENTS = [];

@Resolver(() => Server)
export class ServerResolver {
  constructor(private readonly serverService: ServerService) {}

  @Query(() => [Server])
  async servers(): Promise<Server[]> {
    return await this.serverService.getAll();
  }

  @Query(() => Server)
  async server(@Args('serverId') serverId: number): Promise<Server> {
    return CLIENTS.find((server) => server.id === serverId);
  }

  @Query(() => String)
  async serverStatus(
    @Args('serverId') serverId: number,
  ): Promise<ServerStatus> {
    const server = CLIENTS.find((server) => server.id === serverId);
    return server.status;
  }
}
