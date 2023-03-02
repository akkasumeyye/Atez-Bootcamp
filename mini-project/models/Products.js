// Icin Bir Class yazacagiz Calssimizida
// tum Urunleri donecek bir fonksiyon.
// tum Telefonlri, tabletleri ve televizyonlari donen bir fonksiyon olacak.
// Text Search yapabilecek bir fonksiyornumuz olacak.
var IProductApi = /** @class */ (function () {
    function IProductApi() {
    }
    return IProductApi;
}());
var ProductApi = /** @class */ (function () {
    function ProductApi() {
        this.items = [];
    }
    ProductApi.prototype.findByCategory = function (category) {
        return this.items.filter(function (item) { return item.category === category; });
    };
    ProductApi.prototype.findByText = function (input) {
        var _this = this;
        return this.items.filter(function (item) { return _this.items.includes(item); });
    };
    ;
    ProductApi.prototype.findAll = function () {
        return this.items;
    };
    return ProductApi;
}());
console.log(findByCategory("laptop"));
function findByCategory(arg0) {
    throw new Error("Function not implemented.");
}
// NOTLAR
// Birden fazla dosyada calisabilirsiniz.
// Baska hangi metodlar olabilir? Bir E-Ticaret sistemine yonelik oldugunu goz onunde bulundurarak.
// Calisabilir durumda ve test edilmis olmasi onemli.
// Naminglere dikkat edilmesi gereklidir. Isimlendirme sablonu benzer sekilde olmalidir.
//
