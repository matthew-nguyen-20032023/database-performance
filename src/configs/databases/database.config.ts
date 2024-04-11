import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as cassandra from 'cassandra-driver';
import * as async from 'async';

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

export const MONGO_DATABASE_CONFIG: TypeOrmModuleOptions = {
  name: 'mongodb',
  type: 'mongodb',
  host: process.env.MONGO_DATABASE_HOST,
  port: Number(process.env.MONGO_DATABASE_PORT),
  username: process.env.MONGO_DATABASE_USERNAME,
  password: process.env.MONGO_DATABASE_PASSWORD,
  database: process.env.MONGO_DATABASE_NAME,
  entities: [],
  synchronize: true,
};

// export const scyllaClient = new cassandra.Client({
//   contactPoints: [process.env.SCYLLA_DATABASE_CONNECT_POINT],
//   localDataCenter: 'datacenter1',
//   keyspace: 'test',
// });
//
// async.series([
//   function connect(next) {
//     scyllaClient.connect(next);
//   },
// ]);
