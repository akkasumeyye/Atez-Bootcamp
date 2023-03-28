import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'user',
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5434,
  user: 'postgres',
  password: '123',
  database: 'user'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class UserDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'user';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.user', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
