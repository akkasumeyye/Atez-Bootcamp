import { createStubInstance, expect , sinon, StubbedInstanceWithSinonAccessor } from '@loopback/testlab';
import { GamesController } from '../../../controllers';
import { GameService } from '../../../services/game-service.service';
import { GamesRepository } from '../../../repositories/games.repository';
import { DealsRepository } from '../../../repositories/deals.repository';
import { Games } from '../../../models';

describe('GamesController', () => {
  let gamesRepository: StubbedInstanceWithSinonAccessor<GamesRepository>;
  let gameService: GameService;
  let dealsRepository:StubbedInstanceWithSinonAccessor<DealsRepository>;
  
  let findByTitle : sinon.SinonStub;
  let createAlarm : sinon.SinonStub;
  // let getMultipleGames : sinon.SinonStub;
  let gamesController : GamesController;

  beforeEach(async () => {
    gamesRepository = createStubInstance(GamesRepository);
    gameService = {findByTitle: sinon.stub(), createAlarm: sinon.stub(), getMultipleGames: sinon.stub()};
    findByTitle = gameService.findByTitle as sinon.SinonStub;
    createAlarm = gameService.createAlarm as sinon.SinonStub;
    // getMultipleGames = gameService.getMultipleGames as sinon.SinonStub;
    gamesController = new GamesController(gamesRepository, gameService, dealsRepository);
  });

  describe('findByTitle', () => {
    it('returns a game if it exists', async () => {
      const existingGame = {external: 'batman'};
      findByTitle.resolves(existingGame);

      const result = await gamesController.findByTitle('batman');

      expect(result).to.equal(existingGame);
    });
  });

  describe('createGame', () => {
    it('creates a game if it does not exist', async () => {
      const newGame = {external: 'newgame' };
      gamesRepository.stubs.findOne.resolves(undefined);
      gamesRepository.stubs.create.resolves(newGame as Games);

      const result = await gamesController.createGame(newGame as Games);

      expect(result).to.eql({ ...newGame});
    });

    it('throws an error if the game already exists', async () => {
      const existingGame = { external: 'batman' };
      gamesRepository.stubs.findOne.resolves(existingGame as Games);

      await expect(gamesController.createGame(existingGame as Games)).to.be.rejectedWith('Game with this title already exists');
    });
  });

  describe('getAlerts', () => {
    it('creates an alert and sends an email', async () => {
      const alert = { action: 'set', email: 'test@example.com', gameID: 1, price: 10 };
      createAlarm.resolves(alert);

      const result = await gamesController.getAlerts('set', 'test@example.com', 1, 10);

      expect(result).to.equal('Alarm created');
     
    });
  });

  // describe('getMultipleGames', () => {
  //   it('returns an array of games for valid IDs', async () => {
  //     const game = [
  //       {id: 1, name: 'Game 1'},
  //       {id: 2, name: 'Game 2'},
  //       {id: 3, name: 'Game 3'},
  //     ]
        
  //     const validIds = '1,2,3';
  
  //     const result = await gameService.getMultipleGames(validIds);
  
  //     expect(result).to.eql([
  //       {id: 1, name: 'Game 1'},
  //       {id: 2, name: 'Game 2'},
  //       {id: 3, name: 'Game 3'},
  //     ]);
  //   });
  
  //   it('returns an empty array for invalid IDs', async () => {
  //     const invalidIds = 'foo,bar,baz';
  
  //     const result = await gameService.getMultipleGames(invalidIds);
  
  //     expect(result).to.be.eql([]);
  //   });
  // });

});
