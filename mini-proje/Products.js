"use strict";
// Icin Bir Class yazacagiz Calssimizida
// tum Urunleri donecek bir fonksiyon.
// tum Telefonlri, tabletleri ve televizyonlari donen bir fonksiyon olacak.
// Text Search yapabilecek bir fonksiyornumuz olacak.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// donecegimiz datalar.
//telefon icin { title, description, price, raiting, color ve thumbnail}
//laptop icin { title, description, price, raiting, screenDimentions , discount persentage, thumbnail}
//televizyon icin { title, description, price, raiting thumbnail smarttv, stock}
//tablet icin { title, description, price, raiting, color, celluar, wifi ve thumbnail}
var data_1 = require("./data");
var ProductApi = /** @class */ (function () {
    function ProductApi() {
    }
    ProductApi.prototype.searchByBrandName = function (brand) {
        return data_1.dummyData.filter(function (d) { return d.brand === brand; });
    };
    ProductApi.prototype.findStockCountMax20 = function () {
        return data_1.dummyData.filter(function (i) { return i.stock < 20; });
    };
    ProductApi.prototype.findCheapestProduct = function () {
        var min = Math.min.apply(Math, data_1.dummyData.map(function (_a) {
            var price = _a.price;
            return price;
        }));
        return data_1.dummyData.filter(function (_a) {
            var price = _a.price;
            return price === min;
        });
    };
    ProductApi.prototype.findByCategory = function (category) {
        var data = [];
        data_1.dummyData.filter(function (item) {
            var rest = {
                title: item.title,
                description: item.description,
                rating: item.rating,
                price: item.price,
                id: item.id,
                thumbnail: item.thumbnail
            };
            if (item.category === category && category === "smartphones") {
                data.push(__assign(__assign({}, rest), { color: item.color }));
            }
            else if (item.category === category && category === "laptop") {
                data.push(__assign(__assign({}, rest), { discountPercentage: item.discountPercentage, screenDimentions: item.screenDimentions }));
            }
            else if (item.category === category && category === "tablet") {
                data.push(__assign(__assign({}, rest), { color: item.color, celluar: item.celluar, wifi: item.wifi }));
            }
            else if (item.category === category && item.category === "television") {
                data.push(__assign(__assign({}, rest), { smartTv: item.smartTv, stock: item.stock }));
            }
        });
        return data;
    };
    ProductApi.prototype.findByText = function (input) {
        return data_1.dummyData.filter(function (item) {
            return Object.values(item)
                .filter(function (value) { return typeof value === "string" || typeof value === "number"; })
                .some(function (value) { return typeof value === "string" && value.toUpperCase().includes(input.toUpperCase()); });
        });
    };
    ;
    ProductApi.prototype.findAll = function () {
        return data_1.dummyData;
    };
    return ProductApi;
}());
//telefon icin { title, description, price, raiting, color ve thumbnail}
//laptop icin { title, description, price, raiting, screenDimentions , discount persentage, thumbnail}
//televizyon icin { title, description, price, raiting thumbnail smarttv, stock}
//tablet icin { title, description, price, raiting, color, celluar, wifi ve thumbnail}
var product = new ProductApi();
// console.log(product.findByCategory("tablet"));
// console.log(product.findAll());
// console.log(product.findByText("black"));
// console.log(product.findCheapestProduct());
// console.log(product.findStockCountMax20());
console.log(product.searchByBrandName("HP"));
// NOTLAR
// Birden fazla dosyada calisabilirsiniz.
// Baska hangi metodlar olabilir? Bir E-Ticaret sistemine yonelik oldugunu goz onunde bulundurarak.
// Calisabilir durumda ve test edilmis olmasi onemli.
// Naminglere dikkat edilmesi gereklidir. Isimlendirme sablonu benzer sekilde olmalidir.
//
