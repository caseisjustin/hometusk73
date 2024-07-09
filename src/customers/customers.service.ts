import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './customer.model';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer)
    private readonly customerModel: typeof Customer,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.customerModel.create({createCustomerDto});
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.findAll();
  }

  async findOne(id: string): Promise<Customer> {
    return this.customerModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    const customer = await this.findOne(id);
    return customer.update(updateCustomerDto);
  }

  async remove(id: string): Promise<void> {
    const customer = await this.findOne(id);
    await customer.destroy();
  }
}
