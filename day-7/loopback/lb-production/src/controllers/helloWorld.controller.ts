import { get , post } from "@loopback/rest";
export class HelloWorldController {
    @get('/helloWorld')
    hello():string {
       return 'Hello World!';
    }
}


// forEach(item = item?.user) null check

// Model Business Domain Object yapisini tanimlamasidir. Customer , Adress , Order
// Model datanin seklini tanimlar
// CRUD gibi davranislar Repository ler tarafindan eklenir.

// TYPES OF MODEL DOMAIN OBJECTS

// Value Object : Identity barindirmayan object
// {
//     "name": "Adress",
//     "proporties" : 
//     {
//         "streetNum": "number",
//         "streetName": "string",
//         "city": "string",
//         "zip": "string",
//     }
// }

// Entity Object : ID barindiran bir object
// {
//     "name": "Person",
//     "proporties" : 
//     {
//         id: "number",
//         firstName: "number",
//         lastName: "string",
//         adress: "Adress",
//     }
// }


// WHAT IS DATASOURCE : 3. parti 

// Juggler (Arastirma konusu)

// WHAT IS REPOSITORY
// Modellere CRUD davranisi kattigimiz katman
// Bir Repository strongly-typed data gelişimini saglayan bir servisdir

// WHAT IS CONTROLLER
// 1 Controller bizim req-res yasam dongumuzu yoneten katmandır
// 2 Controller icinde yazılan her fonksiyon ayri ayri req karsilayacak sekilde yazilir
// (post,get vs gibi /products) ve buna göre calisip yanit doner

// Arastirma konusu HTTP Methods (GET, POST, PUT, PATCH , DELETE) ve PUT-PATCH farkı
