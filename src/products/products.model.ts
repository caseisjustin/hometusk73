import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @Column
  name: string;

  @Column
  price: number;

  @Column
  category: string;

  @Column
  imageUrl: string;
}
