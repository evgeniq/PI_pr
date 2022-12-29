import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

// id, name, price, kind, age
@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  price: number;

  @Column({ length: 50 })
  kind: string;

  @Column()
  age: number;

}