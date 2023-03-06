import { ProductService } from "../services/ProductService";
import { ITablet } from "../models/ITablet";
import { ISmartPhone } from "../models/ISmartPhone";
import { ITelevision } from "../models/ITelevision";
import { ILaptop } from "../models/ILaptop";

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
// console.log(productapi.findAll());
// console.log(productapi.findByText("black"));
// console.log(productapi.findCheapestProduct());
// console.log(productapi.findStockCountMax20());
// console.log(productapi.searchByBrandName("HP"));

// console.log(productapi.findByCategory<ISmartPhone>("smartphones"));
// console.log(productapi.findByCategory<ITelevision>("television"));
// console.log(productapi.findByCategory<ITablet>("smartphones"));
console.log(productapi.findByCategory<ILaptop>("laptop"));



