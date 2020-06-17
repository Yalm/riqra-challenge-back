import { EntityRepository, Repository } from 'typeorm';
import { OrderDetail } from '../types/order-detail.type';

@EntityRepository(OrderDetail)
export class OrderDetailsRepository extends Repository<OrderDetail> {}
