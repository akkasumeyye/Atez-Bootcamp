import { dummyData } from "./data";

import { IProduct, IProductApi, ILaptop, ISmartPhone, ITablet, ITelevision } from "./model";

class ProductApi implements IProductApi<IProduct> {
    searchByBrandName (brand: string) : IProduct[] | undefined {
        return dummyData.filter(d => d.brand === brand)
    }

    findStockCountMax20 () : IProduct[] | undefined{
       return dummyData.filter(i => i.stock < 20)
    }

    findCheapestProduct() {
        const min = Math.min(...dummyData.map(({price}) => price))
        return dummyData.filter(({price}) => price === min)
    }   

    findByCategory<T extends IProduct>(category:string) : IProduct[] {
        let data: T[] = [] 
        dummyData.filter((item) => {
            let rest = {
                title: item.title,
                description: item.description,
                rating: item.rating,
                price: item.price,
                id: item.id,
                thumbnail: item.thumbnail,
            }
            if (item.category === category && category === "smartphones" ) {
                data.push({...rest as T , color: item.color})
            } else if (item.category === category && category === "laptop") {
                data.push({...rest as T , discountPercentage: item.discountPercentage, screenDimentions:item.screenDimentions})
            } else if (item.category === category && category === "tablet") {
                data.push({...rest as T , color: item.color , celluar: item.celluar, wifi: item.wifi})
            } else if (item.category === category && item.category === "television") {
                data.push({...rest as T ,  smartTv: item.smartTv, stock: item.stock})
            }
            
        })
                
      return data ;
  }
  findByText(input: string) {
    return dummyData.filter((item) =>
    Object.values(item)
   .filter((value) => typeof value === "string" || typeof value === "number")
   .some((value) => typeof value === "string" && value.toUpperCase().includes(input.toUpperCase()))
);
 };
 
 findAll (): IProduct[] {
     return dummyData; 
 }
} 
//telefon icin { title, description, price, raiting, color ve thumbnail}
//laptop icin { title, description, price, raiting, screenDimentions , discount persentage, thumbnail}
//televizyon icin { title, description, price, raiting thumbnail smarttv, stock}
//tablet icin { title, description, price, raiting, color, celluar, wifi ve thumbnail}

const product = new ProductApi();
console.log(product.findByCategory("tablet"));
// console.log(product.findAll());
// console.log(product.findByText("black"));
// console.log(product.findCheapestProduct());
// console.log(product.findStockCountMax20());
// console.log(product.searchByBrandName("HP"));






// NOTLAR

// Birden fazla dosyada calisabilirsiniz.
// Baska hangi metodlar olabilir? Bir E-Ticaret sistemine yonelik oldugunu goz onunde bulundurarak.
// Calisabilir durumda ve test edilmis olmasi onemli.
// Naminglere dikkat edilmesi gereklidir. Isimlendirme sablonu benzer sekilde olmalidir.
//




