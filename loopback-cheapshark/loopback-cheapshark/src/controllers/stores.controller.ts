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

  // en ucuz ve güncel oyun hangi soreda ise onun datasını getir

  @get('deals')
  async findDealsByTitle(
    @param.query.string('title') title: string,
  ): Promise<number | string | Object | undefined> {
    const dealsResult = await this.dealsService.findDealsByTitle(title);
      const dealObject = new Deals();
      for (const deal of dealsResult) {
      dealObject.normalPrice = deal.normalPrice;
      dealObject.steamAppID = deal.steamAppID;
      dealObject.internalName = deal.internalName;
      dealObject.title = deal.title;
      dealObject.releaseDate = deal.releaseDate;
      dealObject.storesId = deal.storesId;
      dealObject.salePrice = deal.salePrice;
      dealObject.thumb = deal.thumb;
      await this.dealsRepository.create(dealObject);
    }

  return await this.dealsRepository.find({
    include: [{
      relation: 'stores',
      scope: {
        fields: ['salePrice', 'storeID' 'storeName'],
        order: ['salePrice ASC', 'releaseDate DESC'],
      },
    }],
    where: {
      title: { like: `%${title}%` }
    },
  });
  }
}


