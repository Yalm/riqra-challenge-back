import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ProductInput {
  @Field()
  readonly name: string;

  @Field()
  readonly price: number;

  @Field()
  readonly picture: string;
}
