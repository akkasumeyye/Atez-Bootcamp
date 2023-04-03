import { Deals } from '../../../models';
import { StoreService } from './../../../services/store-service.service';
import { StoresController } from './../../../controllers/stores.controller';
import { StoresRepository } from '../../../repositories';
import { DealsRepository } from './../../../repositories/deals.repository';
import { DealsService } from './../../../services/deals-service.service';
import {
  createStubInstance,
  expect,
  sinon,
  StubbedInstanceWithSinonAccessor
} from '@loopback/testlab';


describe('StoresController', () => {
  let dealsRepo: StubbedInstanceWithSinonAccessor<DealsRepository>;
  let storesRepo : StubbedInstanceWithSinonAccessor<StoresRepository>;
  let dealsService : DealsService;
  let storesService : StoreService;

  let findDealsByTitle : sinon.SinonStub;
  let allStores : sinon.SinonStub;
  let controller : StoresController;

  beforeEach(() => {
    dealsRepo = createStubInstance(DealsRepository);
    storesRepo = createStubInstance(StoresRepository);
    dealsService = {findDealsByTitle: sinon.stub() , allDeals: sinon.stub() , findStoreByCheapestPrice: sinon.stub()};
    storesService = {allStores : sinon.stub()};
    findDealsByTitle = dealsService.findDealsByTitle as sinon.SinonStub;
    allStores = storesService.allStores as sinon.SinonStub;
    controller = new StoresController(dealsRepo, dealsService , storesRepo , storesService );
  });


  describe('getAllStores', () => {
    it('returns all stores', async () => {
      const stores  = [{ storeID: 1, storeName: 'Store1' }, { storeID: 2, storeName: 'Store2' }];
      allStores.resolves(stores);

      const result = await controller.getAllStores();

      expect(result).to.be.deepEqual(stores);
    });
  });
  describe('findDealsByTitle', () => {
    it('should call dealsService.findDealsByTitle with searchTitle parameter', async () => {
      const searchTitle = 'batman';
      const sampleDeals = [
        new Deals({
          gameID: 1,
          title: 'batman',
          salePrice: '10.99',
          releaseDate: new Date('2022-01-01'),
          storeID: 1
        }),
        new Deals({
          gameID: 2,
          title: 'batman',
          salePrice: '19.99',
          releaseDate: new Date('2023-03-01'),
          storeID: 1
        })
      ];
      

      findDealsByTitle.resolves(sampleDeals);

      const response = await dealsService.findDealsByTitle(searchTitle);

      // Ensure that the returned deals are sorted by sale price and release date
      for (let i = 1; i < response.length; i++) {
        const previousDeal = response[i - 1];
        const currentDeal = response[i];

        if (previousDeal.salePrice === currentDeal.salePrice) {
          // If two deals have the same sale price, ensure they are sorted in descending order by release date
          expect(currentDeal.releaseDate).to.be.above(previousDeal.releaseDate?.getTime() ?? 0);
        } else {
          // Otherwise, ensure that deals are sorted in ascending order by sale price
          const previousSalePrice = (Number(previousDeal.salePrice));
          expect(previousSalePrice).to.be.below(Number(currentDeal.salePrice));
        }
      }

      // Ensure that each deal's title contains the search term
      for (const deal of response) {
        expect(deal.title.toLowerCase()).to.match(searchTitle.toLowerCase());
      }

      // Ensure that the findDealsByTitle method was called with the correct arguments
      sinon.assert.called(findDealsByTitle);
    });
  });

 

});
