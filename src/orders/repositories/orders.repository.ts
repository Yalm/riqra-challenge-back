import { EntityRepository, Repository } from 'typeorm';
import { Order } from '../types/order.type';

@EntityRepository(Order)
export class OrdersRepository extends Repository<Order> {}
