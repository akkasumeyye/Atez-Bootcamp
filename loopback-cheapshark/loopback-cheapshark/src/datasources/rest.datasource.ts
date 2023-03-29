import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'rest',
  connector: 'rest',
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        url: 'https://www.cheapshark.com/api/1.0/stores',
      },
      functions: {
        AllStores: [],
      },
    },
    {
      template: {
        method: 'GET',
        url: 'https://www.cheapshark.com/api/1.0/deals',
      },
      functions: {
        AllDeals: [],
      },
    },
    {
      template: {
        method: 'GET',
        url: 'https://www.cheapshark.com/api/1.0/games?title={title}',
      },
      functions: {
        findByTitle: ['title'],
      },
    },
    {
      template: {
        method: 'GET',
        url: 'https://www.cheapshark.com/api/1.0/deals?title={title}',
      },
      functions: {
        findDealsByTitle: ['title'],
      },
    },
    {
      template: {
        method: 'POST',
        url: '    https://www.cheapshark.com/api/1.0/alerts?action={action}&{email}&gameID={gameID}&price={price}',
      },
      functions: {
        createAlarm: ['action','email', 'gameID' , 'price'],
      },
    },
    {
      template: {
        method: 'GET',
        url: 'https://www.cheapshark.com/api/1.0/games?ids={ids}',
      },
      functions: {
        getMultipleGames: [],
      },
    },

  ]
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class RestDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'rest';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.rest', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
