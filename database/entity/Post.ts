import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from './User';
import { Company } from './Company';
import { PostType } from './PostType';
import { PostImage } from './PostImage';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn()
  author!: User;

  @ManyToOne(() => Company, (company) => company.posts)
  @JoinColumn()
  company!: Company;

  @ManyToOne(() => PostType, (postType) => postType.posts)
  @JoinColumn()
  postType!: PostType;

  @Column()
  name!: string;

  @Column({ type: 'decimal', precision: 16, scale: 2 })
  price!: number;

  @Column({ type: 'smallint', default: 0})
  discount!: number;

  @Column("text")
  description!: string;

  @OneToMany(() => PostImage, (postImage) => postImage.post)
  images!: PostImage[]

  @OneToOne(() => PostImage, (postImage) => postImage.post)
  @JoinColumn()
  primaryImage!: PostImage;
}
