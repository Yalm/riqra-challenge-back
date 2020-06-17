import { InputType, Field } from '@nestjs/graphql';
import { Item } from './item.input';

@InputType()
export class OrderInput {
  @Field(() => [Item])
  readonly products: Item[];

  @Field()
  readonly shipping: number;

  @Field()
  readonly tax: number;

  @Field()
  readonly subtotal: number;

  @Field()
  readonly total: number;
}
