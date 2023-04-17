import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Post } from './Post';
import { User } from './User';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne(() => User, (user) => user.companies)
  @JoinColumn()
  owner!: User;

  @OneToMany(() => Post, (post) => post.company)
  posts!: Post[];
}
