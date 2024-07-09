import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order, OrderProduct } from './order.model';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { Customer } from '../customers/customer.model';
import { Product } from '../products/products.model';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private readonly orderModel: typeof Order,
    @InjectModel(OrderProduct)
    private readonly orderProductModel: typeof OrderProduct,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = await this.orderModel.create({ customerId: createOrderDto.customerId, status: createOrderDto.status });
    for (let i = 0; i < createOrderDto.productIds.length; i++) {
      await this.orderProductModel.create({ orderId: order.id, productId: createOrderDto.productIds[i], quantity: createOrderDto.quantities[i] });
    }
    return order;
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.findAll({ include: [Customer, { model: OrderProduct, include: [Product] }] });
  }

  async findOne(id: string): Promise<Order> {
    return this.orderModel.findOne({
      where: {
        id,
      },
      include: [Customer, { model: OrderProduct, include: [Product] }],
    });
  }

  async update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.findOne(id);
    return order.update(updateOrderDto);
  }

  async remove(id: string): Promise<void> {
    const order = await this.findOne(id);
    await order.destroy();
  }
}
