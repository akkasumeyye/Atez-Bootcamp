import { Games } from './../models/games.model';
import {inject, injectable, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {RestDataSource} from '../datasources';

export interface GameService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  findByTitle(title: string): Promise<Games>  ;
  createAlarm(action:string ,email: string , gameID: number , price:number): Promise<boolean>;
  getMultipleGames(...ids: number[]): Promise<Games[]>;
}

export class GameServiceProvider implements Provider<GameService> {
  constructor(
    // rest must match the name property in the datasource json file
    @inject('datasources.rest')
    protected dataSource: RestDataSource = new RestDataSource(),
  ) {}

  value(): Promise<GameService> {
    return getService(this.dataSource);
  }
}


