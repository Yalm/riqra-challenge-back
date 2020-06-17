import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Order } from './types/order.type';
import { OrderInput } from './inputs/order.input';
import { OrdersService } from './orders.service';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Mutation(() => Order)
  checkout(@Args('order') order: OrderInput): Promise<Order> {
    return this.ordersService.store(order);
  }
}
