import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/products/types/product.type';
import { Order } from './order.type';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  orderId!: number;

  @Column()
  productId!: number;

  @Column()
  quantity!: number;

  @ManyToOne(
    () => Product,
    product => product.orders,
    { cascade: true, onDelete: 'CASCADE' },
  )
  product!: Product;

  @ManyToOne(
    () => Order,
    order => order.products,
    { cascade: true, onDelete: 'CASCADE' },
  )
  order!: Order;
}
