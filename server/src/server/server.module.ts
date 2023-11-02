import { Module } from '@nestjs/common';
import { ServerResolver } from './server.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Server } from './entities/server.entity';
import { ServerService } from './server.service';

@Module({
  imports: [TypeOrmModule.forFeature([Server])],
  providers: [ServerResolver, ServerService],
})
export class ServerModule {}
