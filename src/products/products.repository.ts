import { EntityRepository, Repository } from 'typeorm';
import { Product } from './types/product.type';

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {}
