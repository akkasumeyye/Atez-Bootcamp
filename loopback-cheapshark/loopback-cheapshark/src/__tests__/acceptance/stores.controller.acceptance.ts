import { LoopbackCheapsharkApplication } from './../../application';
import { Deals } from './../../models';
import { Client , expect} from '@loopback/testlab';
import { setupApplication } from '../acceptance/test-helper';
import chai, {should} from 'chai';
import chaiSorted from 'chai-sorted';

chai.use(chaiSorted);
should();

describe('StoresController', () => {
  let app: LoopbackCheapsharkApplication;
  let client: Client;

  before(async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  describe('getAllStores()', () => {
    it('should return an array of stores', async () => {
      const res = await client.get('/stores').expect(200);
      expect(res.body).to.be.an.Array();
      expect(res.body[0]).to.have.properties('storeID', 'storeName', 'isActive', 'images');
    });
  });

  describe('findDealsByTitle()', () => {
    it('should return an array of deals sorted by salePrice and releaseDate', async () => {
      const searchTitle = 'batman';
      const res = await client.get(`/deals?title=${searchTitle}`).expect(200);
      expect(res.body).to.be.Array();
      expect(res.body[0]).to.have.properties('salePrice', 'storeID');
      // Check that the deals are sorted correctly
      const prices = res.body.map((deal : Deals) => deal.salePrice);
      const deals = res.body;
      deals.should.be.sorted(prices);
    });
  });
});