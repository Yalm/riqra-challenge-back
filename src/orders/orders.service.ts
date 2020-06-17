import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { OrderInput } from './inputs/order.input';
import { Order } from './types/order.type';
import { OrderDetail } from './types/order-detail.type';

@Injectable()
export class OrdersService {
  constructor(private readonly connection: Connection) {}

  store(data: OrderInput) {
    return this.connection.transaction<Order>(async manager => {
      const order = await manager.getRepository(Order).save(data);
      await manager.getRepository(OrderDetail).save(
        data.products.map(item => {
          return {
            orderId: order.id,
            productId: item.id,
            quantity: item.quantity,
          };
        }),
      );
      return order;
    });
  }
}
