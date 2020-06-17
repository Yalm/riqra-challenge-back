import { InputType, Field, ID } from '@nestjs/graphql';
import { ProductInput } from 'src/products/inputs/product.input';

@InputType()
export class Item extends ProductInput {
  @Field(() => ID)
  id: number;

  @Field()
  readonly quantity: number;
}
