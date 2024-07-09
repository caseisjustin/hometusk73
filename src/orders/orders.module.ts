import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order, OrderProduct } from './order.model';
import { Customer } from '../customers/customer.model';
import { Product } from '../products/products.model';

@Module({
  imports: [SequelizeModule.forFeature([Order, OrderProduct, Customer, Product])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
