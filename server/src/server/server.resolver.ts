import { Query, Resolver } from '@nestjs/graphql';
import { Server } from './entities/server.entity';
import { ServerService } from './server.service';

@Resolver(() => Server)
export class ServerResolver {
  constructor(private readonly serverService: ServerService) {}

  @Query(() => [Server])
  async servers(): Promise<Server[]> {
    return await this.serverService.getAll();
  }
}
