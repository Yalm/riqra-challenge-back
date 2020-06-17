import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class FindOptionsInput {
  @Field({ nullable: true })
  readonly search: string;
}
