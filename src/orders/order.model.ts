import { Column, Model, Table, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Customer } from '../customers/customer.model';
import { Product } from '../products/products.model';

@Table
export class Order extends Model {
  @ForeignKey(() => Customer)
  @Column
  customerId: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @Column
  status: string;
}

@Table
export class OrderProduct extends Model {
  @ForeignKey(() => Order)
  @Column
  orderId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @Column
  quantity: number;

  @BelongsTo(() => Product)
  product: Product;

  @BelongsTo(() => Order)
  order: Order;
}
