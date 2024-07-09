import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Customer extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  address: string;
}
