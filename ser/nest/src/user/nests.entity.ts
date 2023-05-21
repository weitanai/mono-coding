import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class NestUsers extends Model {
  @Column
  name: Text;

  @Column
  age: number;

  @Column
  avatar: string;
  
  @Column
  createdAt: Date;
  
  @Column
  updatedAt: Date;
  
}