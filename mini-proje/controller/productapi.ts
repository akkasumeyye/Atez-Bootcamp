import { ProductService } from "../services/IProductService";

const productapi = new ProductService();
console.log(productapi.findByCategory("tablet"));
// console.log(productapi.findAll());
// console.log(productapi.findByText("black"));
// console.log(productapi.findCheapestProduct());
// console.log(productapi.findStockCountMax20());
// console.log(productapi.searchByBrandName("HP"));
