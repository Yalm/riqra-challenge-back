import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Order } from 'src/orders/types/order.type';
import { OrderDetail } from 'src/orders/types/order-detail.type';

@ObjectType()
@Entity()
export class Product {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 191 })
  name: string;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  picture: string;

  @OneToMany(() => OrderDetail, orderDetail => orderDetail.product)
  orders!: OrderDetail[];  
}
