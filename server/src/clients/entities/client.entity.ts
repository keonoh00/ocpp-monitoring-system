import { Field, ObjectType } from '@nestjs/graphql';
import { ClientStatus } from 'src/types/clients';

@ObjectType()
export class Client {
  @Field(() => Number)
  id: number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String)
  address: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => String)
  status: ClientStatus;
}
