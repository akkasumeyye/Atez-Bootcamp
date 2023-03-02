interface Animal {
  name: string;
  type: string;
  age: number;
  eyeColor?: string;
  wiskers?: boolean;
  sounds: () => void;
}

interface Cat extends Animal {
    dot: string;
}

interface Tekir extends Cat {

}

const myCat : Cat = {
    dot: 'Spotted',
    sounds: () => console.log('Meow'),
    name:'Java',
    age: 4,
    type: 'tekir',
}

//Enum açıklaması
enum Months {
    Jan =0, Feb=1, Mar=2, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
}

interface NameGenerator {
    name: string;
    surName: string;
    generate: ()=> string;
}

class Generator implements NameGenerator {
    name: 'Hakan'
    surName: 'Kolcu'
    generate() {
        return `${this.name} ${this.surName}`
    }

}

class Animal {
    name : string;
    type : string;


    constructor(name:string, type:string) {
        this.name = name;
        this.type = type;

    }
}

// model sadece bizim datamız değil gelen datalarda modellencek olabilir
//index.d.ts ==> modules


