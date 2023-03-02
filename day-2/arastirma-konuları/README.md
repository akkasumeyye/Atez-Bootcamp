## Generic

Generics, bir fonksiyon, sınıf veya arayüzün parametrelerine belirli bir türü parametre olarak geçmenizi sağlayan bir özelliktir. Bu, tür güvenliği ve yeniden kullanılabilirliği artırır ve kodunuzu daha az tekrar eden hale getirir.

Generics kullanarak, bir fonksiyonun belirli bir türde işlem yapmasına değil, farklı türlerde verilerle çalışabilmesine izin verirsiniz. Örneğin, bir dizi değeri tersine çevirmek için bir fonksiyon yazabilirsiniz. Ancak, fonksiyonun işlevselliğini sadece bir türe sınırlamak yerine, farklı türlerdeki dizileri tersine çevirmek için aynı fonksiyonu yeniden kullanabilirsiniz.

Aşağıda, bir dizi değeri tersine çeviren bir fonksiyon örneği verilmiştir:

```
function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["apple", "banana", "cherry"];

const reversedArr1 = reverse(arr1);
console.log(reversedArr1); // [5, 4, 3, 2, 1]

const reversedArr2 = reverse(arr2);
console.log(reversedArr2); // ["cherry", "banana", "apple"]
```
Bu örnekte, reverse adlı bir fonksiyon tanımlanmıştır. Fonksiyon bir generic T tipi alır ve T tipindeki bir dizi parametresi alır. Diziyi tersine çevirir ve tersine çevrilmiş diziyi döndürür.

Fonksiyonun çağrılması sırasında, arr1 ve arr2 adlı iki farklı türde dizi geçilmiştir. TypeScript, generics sayesinde fonksiyonu her iki dizi için de çağırmayı mümkün kılar. reversedArr1 ve reversedArr2 değişkenleri, her biri tersine çevrilmiş bir dizi içerir.

Bu örnekte, fonksiyon bir dizi parametresi aldı. Ancak, generics kullanarak, bir sınıfın, bir fonksiyonun veya bir arayüzün belirli bir türde işlem yapmasına sınırlama getirmeden, farklı türlerle çalışabilmesini sağlayabilirsiniz.

## Enum

TypeScript'te, enum adında bir veri türü vardır. enum'lar, bir dizi sabit değeri temsil etmek için kullanılır ve bu değerlere sembolik isimler atanabilir. İşte basit bir enum örneği:

```
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let dir: Direction = Direction.Up;
console.log(dir); // 0

dir = Direction.Right;
console.log(dir); // 3

dir = 2; // Hata: Tip '2' 'Direction' türünden değil.
```

Bu örnekte, Direction adında bir enum tanımlanmıştır. enum'un içindeki değerler, Up, Down, Left ve Right sembolik isimleriyle atanmıştır. Varsayılan olarak, enum'daki değerler, sıfırdan başlayarak artan numaralarla eşleştirilir. Yani, Up değeri 0, Down değeri 1, Left değeri 2 ve Right değeri 3'e eşittir.

Daha sonra, dir adlı bir değişken tanımlanmıştır ve Direction.Up değeri ile başlatılmıştır. Daha sonra, dir değişkenine farklı bir Direction değeri atanmış ve sonuç olarak dir değişkeninin değeri değiştirilmiştir.

Son olarak, dir değişkenine bir tam sayı ataması yapılmıştır. Bu, hata verir, çünkü dir değişkeni Direction türünden ve yalnızca Direction'daki sembolik isimlerle eşleştirilen değerler alabilir.

## Deep Dive Functions

[burada güzel anlatılmış](https://www.w3schools.com/typescript/typescript_functions.php)

## Deep Dive Inheritance and extends

Inheritance konusunu inhertance.js dosyasında inceleyeceğim.

## Classes

Class'lar OOP'nin temelini oluşturan yapılardır. Sınıflar, benzer davranışları ve özellikleri olan nesneleri bir arada gruplamak ve düzenlemek için kullanılır. 

Sınıflar, aşağıdaki özellikleri sağlayarak kullanışlıdır:

**1- Encapsulation (Kapsülleme):** Sınıflar, verileri ve bunların ilgili fonksiyonları bir arada tutarak kapsülleme sağlar. Bu sayede, kodun diğer bölümleri tarafından doğrudan erişilemeyen veya değiştirilemeyen özellikler oluşturabilirsiniz

**2- Inheritance (Miras):** Sınıflar, başka sınıflardan özellikler ve davranışlar miras alabilirler. Bu sayede, benzer özelliklere sahip ancak bazı farklılıkları olan sınıflar oluşturabilirsiniz. Bu da kodun tekrar kullanımını artırır ve kod yazımını hızlandırır.

**3- Polymorphism (Çok Biçimlilik):**  Sınıflar, aynı adı taşıyan ancak farklı parametreler alan fonksiyonları destekleyerek çok biçimliliği sağlar. Bu sayede, farklı parametrelerle aynı fonksiyonu birden çok kez kullanabilirsiniz.

İşte basit bir sınıf örneği:

```
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  sayHello(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person = new Person("John", 30);
person.sayHello(); // Hello, my name is John and I'm 30 years old.

```


## Architecture filing (Models, enums, classes)

**Models:** Modeller, bir projenin farklı bölümlerinde kullanılabilen ve belirli bir veri yapısını temsil eden kod parçalarıdır. Bu nedenle, doğru bir şekilde tanımlanmaları ve kullanılmaları, bir projenin güvenliğini ve bakımını kolaylaştırabilir.

[Class, Interface ve Models arasındaki farkı anlamak için bu article okuyabilirsin](https://www.codefeetime.com/post/typescript-class-or-interface-for-model/)

## Hot reload and watching

TypeScript ile çalışırken, kod değişikliklerini yaparken tekrar tekrar kodu derlemek ve uygulamayı yeniden başlatmak gerekebilir. Bu, geliştirme sürecini yavaşlatabilir ve zaman alıcı olabilir. Bu nedenle, "hot reloading" adı verilen bir teknik kullanarak, uygulamayı yeniden başlatmadan kod değişikliklerinin anında yansıtılmasını sağlayabilirsiniz.

TypeScript'te hot reloading, genellikle bir derleyici (compiler) ve bir izleyici (watcher) kullanarak gerçekleştirilir. Derleyici, kaynak kodunu derleyerek JavaScript kodunu oluştururken, izleyici, kodu izleyerek, kaynak kodunda herhangi bir değişiklik olduğunda derleyiciyi otomatik olarak tetikleyerek yeniden derleme işlemini gerçekleştirir.

Bu işlem, bir komut satırı aracı olan `tsc` ile gerçekleştirilebilir. `tsc` komutunu kullanarak, kodunuzu izleyebilir ve değişiklikler yapıldığında otomatik olarak yeniden derleyebilirsiniz. Örneğin, aşağıdaki komutu kullanarak, `src` klasöründe bulunan TypeScript dosyalarını izleyebilirsiniz:

```
tsc --watch src/*.ts
```

Bu komut, `src` klasöründeki tüm TypeScript dosyalarını izleyecek ve herhangi bir değişiklik olduğunda otomatik olarak derleyecektir. Derleme işlemi tamamlandıktan sonra, JavaScript kodunu çalıştırmak için normal bir yöntem kullanabilirsiniz. Örneğin, Node.js kullanarak aşağıdaki komutu kullanabilirsiniz:

```
node dist/index.js
```

Alternatif olarak, `tsc-watch` gibi üçüncü taraf araçlarını da kullanabilirsiniz. Bu araçlar, `tsc`'nin işlevselliğini geliştirir ve daha fazla özellik eklerler. Örneğin, tsc-watch aracını kullanarak, otomatik yeniden yükleme işlemini gerçekleştirmek için ek bir parametre ekleyebilirsiniz. Örneğin, aşağıdaki komutu kullanarak `src` klasöründeki TypeScript dosyalarını izleyebilirsiniz:

```
tsc-watch --onSuccess "node dist/index.js" --src src/
```

Bu komut, herhangi bir değişiklik olduğunda TypeScript kodunu otomatik olarak derler ve derleme başarılı olduğunda `node dist/index.js` komutunu çalıştırır.

Hot reloading, geliştirme sürecini hızlandırabilir ve zaman kazandırabilir. Ancak, büyük projelerde hot reloading, kaynak kodunun büyüklüğüne ve derleme süresine bağlı olarak yavaş olabilir. Bu nedenle, hot reloading'i kullanırken, projenizin ölçeğini ve kaynak kodunuzdaki karmaşıklığı göz önünde bulundurmanız önemlidir.

## Commands

1- `tsc`: TypeScript kodunuzu derleyerek JavaScript'e dönüştürmek için kullanılan ana komuttur. Bu komutu kullanarak, `tsc` ile derlenen TypeScript dosyalarının varsayılan olarak JavaScript dosyalarına dönüştürüleceği bir çıktı dizini belirleyebilirsiniz. Örneğin:

```
tsc file.ts
```
Bu, `file.ts` dosyasını `file.js` olarak derleyecektir.

2- `tsc --watch` : Bu komut, `tsc` komutunu otomatik olarak çalıştırarak, TypeScript kodunuzu otomatik olarak derler. Bu, TypeScript kodunuzu düzenlerken ve her değişiklik yaptığınızda tekrar derlemeniz gerektiğinde zaman kazandırır.

3- `tsc --init` : Bu komut, TypeScript projesi için bir `tsconfig.json` dosyası oluşturmanızı sağlar. Bu dosya, projenizde kullanacağınız derleme ayarlarını tanımlar.

4- `tsc-node` Bu komut, TypeScript kodunu doğrudan çalıştırmanıza olanak tanır. Bu, TypeScript kodunuzu derleme işlemi yapmadan hızlı bir şekilde çalıştırmanızı sağlar. Örneğin:

```
ts-node file.ts
```

5- `eslint`: Bu komut, TypeScript kodunuzu statik olarak analiz ederek hataları ve uyumsuzlukları bulmanıza yardımcı olan bir araçtır. eslint kullanarak, TypeScript kodunuzu daha güvenli ve hatasız hale getirebilirsiniz.

6- `jest`: Jest, JavaScript ve TypeScript projeleri için popüler bir test çerçevesidir. TypeScript kodunuzu Jest ile test edebilir ve TypeScript ile yazılmış testler oluşturabilirsiniz.

Bu komutlar, TypeScript kodunuzu derleme, çalıştırma, test etme ve hataları bulma işlemlerinde kullanabileceğiniz temel araçlardır.