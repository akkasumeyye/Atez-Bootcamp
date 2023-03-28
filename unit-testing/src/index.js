class MethodClass {
    constructor() {
        console.log('started..')
    }
    add (a,b) {
        return a+b;
    }

    greet(str) {
  console.log(str);
    }

    anotherMethod( c, d ){
        const result = this.add( c , d );
        this.greet("Hello World!");
        return result;
    }

    PromiseTetCase () {
        return new Promise((resolve,reject) =>{
            setTimeout(()=> resolve(3), 3000)

        }).then ((result) => result * 3)
    }

}

module.exports = MethodClass;