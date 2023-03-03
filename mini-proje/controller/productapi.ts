import { ProductApi } from "../services/IProductApi";

const product = new ProductApi();
console.log(product.findByCategory("tablet"));
// console.log(product.findAll());
// console.log(product.findByText("black"));
// console.log(product.findCheapestProduct());
// console.log(product.findStockCountMax20());
// console.log(product.searchByBrandName("HP"));
