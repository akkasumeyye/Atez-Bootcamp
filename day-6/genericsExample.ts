

function takeSomeJobAndReturn<J> (job: J) : J {
    console.log(job);
  return job;
}

const message:string = takeSomeJobAndReturn('Hello World'); // sadece burada gerçekleştiğinde string
const messageNum : number = takeSomeJobAndReturn(123); // sadece burada number

function createArrayFromArray <A> (items: A[]) : A[] {
    return new Array<A>().concat(items)
}

let numArray = createArrayFromArray([200,300,400])
let strArray = createArrayFromArray(['asd'])

// numArray.push('String Value'); numArray için A her zaman number bir değerdir
// strArray.push(2) strArray için A her zaman string bir değerdir

function getUserInfo<U,I>(id:U , name:I) : void {
    console.log(`${id} numarali kullanicinin ismi ${name}`)
}

getUserInfo<number,string>(2,"Sumeyye")

// function showTypes<U,I>(id:U , name:I) : void {
//     console.log(typeof id, typeof name)
// }

// showTypes<number,string>(2,"Sumeyye")

// Notlar, bir fonksiyona birden fazla generics type atayabiliriz, 
//generic tipler tek tip generic tip gibi aldığı gerçekleştiği veya çalıştığı durumda aldığı değerden başka değer alamazken başka bir durumda tekrar çağırıldığında farklı tipler alabilirler

// class GenericNumber<T> {
//     staringPOint: T;
//     add: (x:T, y:T) => T
// }

// let createGenericNumber = new GenericNumber<number>();
// createGenericNumber.staringPOint = 0 ;
// createGenericNumber.add(x,y) {
//     return x+y ;
// }



interface IShoppingHistory {
  itemName : string;
  quantity : number;
  color: string;
}

interface IUsers {
    email: string;
    name: string;
    id: number | string;
    isVerified : boolean
    shoppingHistory : IShoppingHistory;
}

interface Collection<T> {
    add:(x:T) => void;
    remove:(y : T) => void;
    returnArray(): T[]
}

// KALITIM ALDIĞIMIZ İNTERFACE İÇERİSİNDE GENERİC BİR TİP VARSA VE BU BİR HARF İLE İSİMLENDİRİLDİYSE BASKA BİR İNSTANCE İÇERİSİNDE
// KULLANILACAĞI ZAMAN VERİLECEK OLAN GENERİC TİPİ BELİRTEN HARFİN FARKLI OLMASI BİR ÖNEMİ YOKTUR
// TİPİ GELECEK OLAN DEĞERİNİ ETKİLEMEZ

class Basket<U> implements Collection<U> {
    private data : U[] = [];
    add(x:U) {
        this.data.push(x)
    }

    remove(y:U) {
        let index = this.data.indexOf(y);
        if(index > -1) {
            this.data.splice(index, 1)
        }
    }

    returnArray(): U[] {
        return this.data;
    }
}

let numbers: Collection<number> = new Basket<number>()  
numbers.add(11);
numbers.add(1903);
numbers.add(3);
numbers.remove(11);

let returnValue= numbers.returnArray();

console.log(returnValue);

class Customer {
    firstName: string;
    lastName: string;

    constructor(name:string, surName:string) {
        this.firstName = name;
        this.lastName = surName;
    }
}

class FirstCustomer extends Customer {
    id: number;
    constructor(id:number, name, lastName) {
        super(name, lastName);
        this.id = id;
    }
}

function logCustomers<T extends Customer> (person : T) : void {
    console.log(`${person.firstName} ${person.lastName} is a customer`);
}

// let customer = new FirstCustomer( 2, 'Doe', 'Jane');
let customer = new Customer('Doe', 'Jane');

logCustomers(customer);

// Eger bir Generic tip bir class veya interface ten kalitim (extends || implements) aldiysa
// o tipe atanabilecek her tip ayni class veya interfaceten kalitim almis olmak durumundadir.
// yani yukaridaki ornekteki gibi Customer veya FirstCustomer tipi bir veri alabirken string veya number veri alamaz.



interface Pair<T, U> {
    first: T,
    second: U;
}

let value: Pair<number, string> = {
    first : 1000,
    second : '1K',
}

let anotherValue: Pair<string, string> = { first: 'smStr' , second: 'anotherStr' }

interface Command<T, R> {
    jobId: T;
    run(value: T): R
}

let jobRunner: Command<string, number> ={
    jobId: 'asdasdasf',
    run:function (value) {
        return 3
    }
}
