import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post } from './Post';
import { Company } from './Company';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({unique: true})
  username!: string;

  @Column()
  password!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ nullable: true })
  phone!: string;

  @Column({ default: false })
  isDocumentVerified!: boolean;

  @OneToMany(() => Post, (post) => post.author)
  posts!: Post[];

  @OneToMany(() => Company, (post) => post.owner)
  companies!: Company[];
}
