import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'outgoing_messages', synchronize: false })
export class Client {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { nullable: true })
  @Column({ name: 'message_name', nullable: true })
  messageName?: string;

  @Field(() => String)
  @Column({ name: 'date', nullable: true })
  createdAt?: string;

  @Field(() => String)
  @Column({ name: 'message_parameters', nullable: true })
  messageParameteres?: string;
}
