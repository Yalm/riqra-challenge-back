import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { Product } from './types/product.type';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsRepository } from './products.repository';
import { ProductInput } from './inputs/product.input';
import { FindOptionsInput } from './inputs/find-many-options';
import { Like, FindConditions } from 'typeorm';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(
    @InjectRepository(ProductsRepository)
    private readonly productsRepository: ProductsRepository,
  ) {}

  @Query(() => [Product])
  productFindAll(
    @Args({ name: 'findOptions', nullable: true })
    findOptions?: FindOptionsInput,
  ): Promise<Product[]> {
    const where: FindConditions<Product> = {};

    if (findOptions?.search) {
      where.name = Like(`%${findOptions.search}%`);
    }

    return this.productsRepository.find({
      where,
    });
  }

  @Mutation(() => Product)
  productCreate(@Args('product') product: ProductInput): Promise<Product> {
    return this.productsRepository.save({...product});
  }
}
