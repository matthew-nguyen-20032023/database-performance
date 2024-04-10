import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const MYSQL_DATABASE_CONFIG: TypeOrmModuleOptions = {
  name: 'mysql',
  type: 'mysql',
  host: process.env.MYSQL_DATABASE_HOST,
  port: Number(process.env.MYSQL_DATABASE_PORT),
  username: process.env.MYSQL_DATABASE_USERNAME,
  password: process.env.MYSQL_DATABASE_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  entities: [],
  synchronize: true,
};

export const POSTGRES_DATABASE_CONFIG: TypeOrmModuleOptions = {
  name: 'postgres',
  type: 'postgres',
  host: process.env.POSTGRES_DATABASE_HOST,
  port: Number(process.env.POSTGRES_DATABASE_PORT),
  username: process.env.POSTGRES_DATABASE_USERNAME,
  password: process.env.POSTGRES_DATABASE_PASSWORD,
  database: process.env.POSTGRES_DATABASE_NAME,
  entities: [],
  synchronize: true,
};
