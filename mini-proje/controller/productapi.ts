import { ProductService } from "../services/IProductService";

export class ProductApi {
    service:ProductService
    constructor(service:ProductService) {
        this.service = service;
    }
    
  findAll () {
    return this.service.findAll();
  }
  findByCategory (category: string) {
    return this.service.findByCategory(category);
  }
  findByText (input: string) {
    return this.service.findByText(input);
  };
  //En ucuz ürünü seç
  findCheapestProduct () {
    return this.service.findCheapestProduct();
  };
  //Stok 20 den az olan ürünleri getir
  findStockCountMax20 () {
    return this.service.findStockCountMax20()   
  };
  //marka ismiyle arama yap
  searchByBrandName (brand: string) {
    return this.service.searchByBrandName(brand);
  };
    
}
const productapi = new ProductService();
// console.log(productapi.findByCategory("tablet"));
// console.log(productapi.findAll());
console.log(productapi.findByText("black"));
// console.log(productapi.findCheapestProduct());
// console.log(productapi.findStockCountMax20());
// console.log(productapi.searchByBrandName("HP"));
