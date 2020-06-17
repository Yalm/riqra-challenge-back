import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { OrderDetail } from './order-detail.type';

@ObjectType()
@Entity()
export class Order {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  shipping: number;

  @Field()
  @Column()
  tax: number;

  @Field()
  @Column()
  subtotal: number;

  @Field()
  @Column()
  total: number;

  @OneToMany(() => OrderDetail, orderDetail => orderDetail.order)
  products!: OrderDetail[];  
}
