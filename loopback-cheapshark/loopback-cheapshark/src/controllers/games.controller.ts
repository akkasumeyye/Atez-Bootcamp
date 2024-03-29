import { DealsRepository } from './../repositories/deals.repository';
import { GameService} from './../services/game-service.service';
import {inject} from '@loopback/core';
import {
  repository,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  requestBody,
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
  const existingGame = await this.gamesRepository.findOne({ where: { external: game.external } });
  if (existingGame) {
    throw new Error('Game with this title already exists');
  }
  return this.gamesRepository.create(game);
}

// fiyat alarmı olustur


@get('/alerts')
async getAlerts(
  @param.query.string('action') action: string,
  @param.query.string('email') email: string,
  @param.query.number('gameID') gameID: number,
  @param.query.number('price') price: number,
): Promise<string> {

  const alert = await this.gameService.createAlarm(action, email, gameID, price);

  // Send email with Nodemailer
  if (alert) {
     // code to send email
  }

  return "Alarm created";
}


// multiple oyun girince datayı getir

@post('/games')
async getMultipleGames(
//  @requestBody() ids: number[]
@param.query.string('ids') ids: string
) : Promise<Games[]> {
  const games = await this.gameService.getMultipleGames(ids);
  return games;
}
}

