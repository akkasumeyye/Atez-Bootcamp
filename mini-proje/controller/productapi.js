"use strict";
exports.__esModule = true;
exports.ProductApi = void 0;
var IProductService_1 = require("../services/IProductService");
var ProductApi = /** @class */ (function () {
    function ProductApi(service) {
        this.service = service;
    }
    ProductApi.prototype.findAll = function () {
        return this.service.findAll();
    };
    ProductApi.prototype.findByCategory = function (category) {
        return this.service.findByCategory(category);
    };
    ProductApi.prototype.findByText = function (input) {
        return this.service.findByText(input);
    };
    ;
    //En ucuz ürünü seç
    ProductApi.prototype.findCheapestProduct = function () {
        return this.service.findCheapestProduct();
    };
    ;
    //Stok 20 den az olan ürünleri getir
    ProductApi.prototype.findStockCountMax20 = function () {
        return this.service.findStockCountMax20();
    };
    ;
    //marka ismiyle arama yap
    ProductApi.prototype.searchByBrandName = function (brand) {
        return this.service.searchByBrandName(brand);
    };
    ;
    return ProductApi;
}());
exports.ProductApi = ProductApi;
var productapi = new IProductService_1.ProductService();
// console.log(productapi.findByCategory("tablet"));
// console.log(productapi.findAll());
console.log(productapi.findByText("black"));
// console.log(productapi.findCheapestProduct());
// console.log(productapi.findStockCountMax20());
// console.log(productapi.searchByBrandName("HP"));
