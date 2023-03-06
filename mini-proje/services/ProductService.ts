import { IProduct } from "../models/IProduct";
import { ITablet } from "../models/ITablet";
import { ITelevision } from "../models/ITelevision";
import { ISmartPhone } from "../models/ISmartPhone";

import { dummyData } from "../data";

export interface IProductService<T> {
  findAll: () => T[];
  findByCategory: (category: string) => T[];
  findByText: (input: string) => T[];
  //En ucuz ürünü seç
  findCheapestProduct: () => T[];
  //Stok 20 den az olan ürünleri getir
  findStockCountMax20: () => T[] | undefined;
  //marka ismiyle arama yap
  searchByBrandName: (brand: string) => T[] | undefined;
}

export class ProductService implements IProductService<IProduct> {
  searchByBrandName(brand: string): IProduct[] | undefined {
    return dummyData.filter((d) => d.brand === brand);
  }

  findStockCountMax20(): IProduct[] | undefined {
    return dummyData.filter((i) => i.stock < 20);
  }

  findCheapestProduct() {
    const min = Math.min(...dummyData.map(({ price }) => price));
    return dummyData.filter(({ price }) => price === min);
  }

  findByCategory<T extends IProduct>(category: string): IProduct[] {
    return dummyData.filter(item => item.category === category);
 }
 
  findByText(input: string) {
    return dummyData.filter((item) =>
      Object.values(item)
        .filter(
          (value) => typeof value === "string" || typeof value === "number"
        )
        .some(
          (value) =>
            typeof value === "string" &&
            value.toUpperCase().includes(input.toUpperCase())
        )
    );
  }

  findAll(): IProduct[] {
    return dummyData;
  }
}
