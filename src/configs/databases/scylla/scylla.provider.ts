import { Injectable } from '@nestjs/common';
import { Client } from 'cassandra-driver';

@Injectable()
export class ScyllaProvider {
  private readonly client: Client;

  constructor() {
    console.log('Connecting to scylla...');
    this.client = new Client({
      contactPoints: [process.env.SCYLLA_DATABASE_CONNECT_POINT],
      localDataCenter: process.env.SCYLLA_DATACENTER,
      keyspace: process.env.SCYLLA_DATABASE_NAME,
    });
    console.log('Connected to scylla...');
  }

  public getClient(): Client {
    return this.client;
  }
}
