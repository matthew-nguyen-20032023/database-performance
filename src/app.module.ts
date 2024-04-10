import * as dotenv from 'dotenv';
dotenv.config();
import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  MYSQL_DATABASE_CONFIG,
  POSTGRES_DATABASE_CONFIG,
} from 'src/configs/databases/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(MYSQL_DATABASE_CONFIG),
    TypeOrmModule.forRoot(POSTGRES_DATABASE_CONFIG),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
