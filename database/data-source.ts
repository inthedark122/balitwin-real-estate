import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Post } from './entity/Post';
import { Company } from './entity/Company';
import { PostType } from './entity/PostType';
import { PostImage } from './entity/PostImage';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  username: process.env.DB_USERNAME || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE_NAME || 'balitwin_real_estate',
  // synchronize: process.env.NODE_ENV !== "production",
  synchronize: true,
  logging: false,
  entities: [User, Post, Company, PostType, PostImage],
  migrations: [],
  subscribers: [],
});
