//

class Dersler {
    constructor(name,teacher) {
        // dersler classındaki butun objeler icin this
        this.name = name;
        this.teacher = teacher;
    }

    //metodu class dısında cagırınca calısmaz!!
    getClassNameWithTeacher () {
    
        if(this.name && this.teacher)
        return this.name + "dersin öğretmeni" +this.teacher;
    
    }
    
    
}
const mathLesson = new Dersler(name ="Matematik", teacher ="Umit")
console.log(mathLesson.getClassNameWithTeacher())



// super () aslında sen bu metoddaki bilgileri al ve kullan
class Animal {
constructor(name,age){
    this.name = name;
    this.age = age;

}
}

class Dog extends Animal {
    constructor(name){
        super(name);
    }

    bark() {
        return this.name +" " + "havladi.";
    }
}

class Cat extends Animal {
    constructor(name){
        super(name);
    }

    scratch() {
        return this.name + " "+ "tirmaladi."
    }
}

const goldenRetriever = new Dog('Eddie')
console.log(goldenRetriever.bark())
const iranCat = new Cat('Java')
console.log(iranCat.scratch())
