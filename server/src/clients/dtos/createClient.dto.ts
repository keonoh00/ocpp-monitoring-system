import { ArgsType, Field } from '@nestjs/graphql';
import { IsNumber, IsString, Length } from 'class-validator';
import { ClientStatus } from 'src/types/clients';

@ArgsType()
export class CreateClientDto {
  @Field(() => Number)
  @IsNumber()
  id: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @Length(1, 255)
  name?: string;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => String)
  @IsString()
  status: ClientStatus;
}
