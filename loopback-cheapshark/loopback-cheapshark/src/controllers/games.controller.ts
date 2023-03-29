import { DealsRepository } from './../repositories/deals.repository';
import {GameService} from './../services/game-service.service';
import {inject} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Games} from '../models';
import {GamesRepository} from '../repositories';

export class GamesController {
  constructor(
    @repository(GamesRepository)
    public gamesRepository: GamesRepository,
    @inject('service.GameService')
    protected gameService: GameService,
    @repository(DealsRepository)
    public dealsRepository: DealsRepository,
  ) {}

  //aradığım oyun bilgilerini getir

  @get('/games')
  findByTitle(
    @param.query.string('title') title: string,
  ): Promise<Games> {
    return this.gameService.findByTitle(title);
  }

  // aradıgım oyun yoksa kaydet

@post('/games')
async createGame(
  @requestBody() game: Omit<Games, 'id'>,
): Promise<Games> {
  let existingGame = await this.gamesRepository.findOne({ where: { external: game.external } });
  if (existingGame) {
    throw new Error('Game with this title already exists');
  }
  return this.gamesRepository.create(game);
}

// fiyat alarmı olustur
// url http://[::1]:3000/alerts?action=set&email=hello%40gmail.com&gameID=34&price=14.99 olarak heliyor maildeki @ işareti yerine %40 geldiğinden datayı cekemiyor


@post('/alerts')
async getAlerts(
  @param.query.string('action') action:string,
  @param.query.string('email') email:string,
  @param.query.number('gameID') gameID:number,
  @param.query.number('price') price:number,
): Promise<string>  {
  const alert = await this.gameService.createAlarm(action,email,gameID,price);

  // Nodemailer ile mail gönderme

  if(alert) {
     // burada mail gönderilir
  }
  return "Alarm olusturuldu";

}

// multiple oyun girince datayı getir
// url http://[::1]:3000/game?ids=128%2C129%2C130 olarak geliyor, aralarında virgül yerine %2C koyduğundan data gelmiyor ama dogru :)


@post('/game')
async getMultipleGames(
//  @requestBody() ids: number[]
@param.query.string('ids') ids: string
) : Promise<Games[]> {
  return await this.gameService.getMultipleGames(ids)
}
}
