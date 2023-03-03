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
    let data: T[] = [];
    dummyData.filter((item) => {
      let rest = {
        title: item.title,
        description: item.description,
        rating: item.rating,
        price: item.price,
        id: item.id,
        thumbnail: item.thumbnail,
      };
      if (item.category === category && category === "smartphones") {
        data.push({ ...(rest as T), color: item.color });
      } else if (item.category === category && category === "laptop") {
        data.push({
          ...(rest as T),
          discountPercentage: item.discountPercentage,
          screenDimentions: item.screenDimentions,
        });
      } else if (item.category === category && category === "tablet") {
        data.push({
          ...(rest as T),
          color: item.color,
          celluar: item.celluar,
          wifi: item.wifi,
        });
      } else if (item.category === category && item.category === "television") {
        data.push({ ...(rest as T), smartTv: item.smartTv, stock: item.stock });
      }
    });

    return data;
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
