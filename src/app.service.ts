import { Injectable } from '@nestjs/common';
import { ScyllaProvider } from 'src/configs/databases/scylla/scylla.provider';

@Injectable()
export class AppService {
  constructor(private readonly scyllaProvider: ScyllaProvider) {}

  getHello(): string {
    return 'Hello World!';
  }
}
