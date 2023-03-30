import { StoreService } from '../services/store-service.service';
import { DealsService } from '../services/deals-service.service';
import { StoresRepository } from '../repositories/stores.repository';
import { Deals } from '../models/deals.model';
import { DealsRepository } from '../repositories/deals.repository';
import { inject } from '@loopback/core';
import { repository } from '@loopback/repository';
import {get, param, post, requestBody} from '@loopback/rest';

export class StoresController {
  constructor(
    @repository(DealsRepository)
    private dealsRepository: DealsRepository,
    @inject('service.DealsService')
    private dealsService: DealsService,
    @repository(StoresRepository)
    private storesRepository: StoresRepository,
    @inject('service.StoreService')
    private storeService: StoreService,
  ) {}

  //bütün store bilgilerini getir

  @get('/stores')
  find() {
    return this.storeService.AllStores();
  }

  // aranan oyun adı (title) en ucuz ve güncel oyun hangi storeda ise onun datasını getir
  // ama tam oyun ismi girmelisiniz 'LEGO Batman' gibi
@get('deals')
  async findDealsByTitle(
  @param.query.string('title') searchTitle: string,
): Promise<number | string | Object | undefined> {
  const foundDeals = await this.dealsService.findDealsByTitle(searchTitle);
  await this.saveDeals(foundDeals);
  const sortedDeals = await this.findAndSortDeals(searchTitle);
  return sortedDeals;
}

async saveDeals(dealsToSave: Deals[]): Promise<void> {
  const dealObjectTemplate = new Deals();
  for (const foundDeal of dealsToSave) {
    const dealObject = new Deals();
    dealObject.normalPrice = foundDeal.normalPrice;
    dealObject.steamAppID = foundDeal.steamAppID;
    dealObject.internalName = foundDeal.internalName;
    dealObject.title = foundDeal.title;
    dealObject.releaseDate = foundDeal.releaseDate;
    dealObject.storeID = foundDeal.storeID;
    dealObject.salePrice = foundDeal.salePrice;
    dealObject.thumb = foundDeal.thumb;
    await this.dealsRepository.create(dealObject);
  }
}

async findAndSortDeals(title: string): Promise<Deals[]> {
  const sortedDeals = await this.dealsRepository.find({
    fields: ['salePrice', 'storeID'],
    order: ['salePrice ASC', 'releaseDate DESC'],
    where: {
      title: { like: `%${title}%` }
    },
  });
  return sortedDeals;
}

}


