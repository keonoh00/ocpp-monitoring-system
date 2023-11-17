import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'current_status', synchronize: false })
export class ClientStatus {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { nullable: true })
  @Column({ name: 'status', nullable: true })
  status?: string;

  @Field(() => String)
  @Column({ name: 'val', nullable: true })
  value?: string;
}
