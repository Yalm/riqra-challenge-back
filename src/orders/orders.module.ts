import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './types/order.type';
import { OrdersRepository } from './repositories/orders.repository';
import { OrdersResolver } from './orders.resolver';
import { OrderDetail } from './types/order-detail.type';
import { OrderDetailsRepository } from './repositories/order-details.repository';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrdersRepository,
      OrderDetail,
      OrderDetailsRepository,
    ]),
  ],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}
