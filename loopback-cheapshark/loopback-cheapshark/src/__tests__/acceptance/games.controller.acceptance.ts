import { Client } from '@loopback/testlab';
import { LoopbackCheapsharkApplication } from './../../application';
import { setupApplication } from '../acceptance/test-helper';


describe('GamesController', () => {
  let app: LoopbackCheapsharkApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({ app, client } = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('should get game by title', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const res = await client.get('/games?title=batman').expect(200);
  });

  it('should create new game', async () => {
    const game = { title: 'New Game', external: 'new-game', price: 19.99 };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const res = await client.post('/games').send(game).expect(200);
  });

  it('should create price alert and send email', async () => {
    const alert = { action: 'set', email: 'test@example.com', gameID: 34, price: 14.99 };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const res = await client.get('/alerts').query(alert).expect(200);
  });

  it('should get multiple games by IDs', async () => {
    const ids = '128,129,130';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const res = await client.post('/games').query({ ids }).expect(200);
  });
});