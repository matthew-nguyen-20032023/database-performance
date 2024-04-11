import * as dotenv from 'dotenv';
dotenv.config();
import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  MONGO_DATABASE_CONFIG,
  MYSQL_DATABASE_CONFIG,
  POSTGRES_DATABASE_CONFIG,
} from 'src/configs/databases/database.config';
import { ScyllaProvider } from 'src/configs/databases/scylla/scylla.provider';

@Module({
  imports: [
    TypeOrmModule.forRoot(MYSQL_DATABASE_CONFIG),
    TypeOrmModule.forRoot(POSTGRES_DATABASE_CONFIG),
    TypeOrmModule.forRoot(MONGO_DATABASE_CONFIG),
  ],
  controllers: [AppController],
  providers: [AppService, ScyllaProvider],
  exports: [AppService, ScyllaProvider],
})
export class AppModule {}
