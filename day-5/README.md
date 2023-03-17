# CALLBACK HELL (arastirma konusu)
Callback Hell, asenkron programlamada sıklıkla karşılaşılan bir sorundur ve kodun okunabilirliğini, bakımını ve genişletilebilirliğini azaltır. Callback Hell, bir işlem tamamlandığında, bir sonraki işlemin gerçekleştirilmesi için çağrılan bir geri çağrı fonksiyonu zinciri ile ilgilidir.

Birçok işlemi zincirleme şeklinde gerçekleştirirken, bu işlemlerin her biri bir asenkron fonksiyon olabilir ve her bir fonksiyonun tamamlanması için geri arama fonksiyonlarına ihtiyaç duyulabilir. Bu durumda, geri çağrı fonksiyonları derinleşen bir şekilde çağrılabilir ve bu da kodun okunaklığını azaltabilir.

Bu sorunu önlemek için, Promise'ler veya async/await gibi alternatif asenkron programlama teknikleri kullanılabilir. Bu teknikler, işlemleri daha basit bir şekilde zincirlemek ve geri çağrı fonksiyonlarına olan ihtiyacı azaltmak için tasarlanmıştır.

Aşağıdaki örnek, bir dosyadan verileri okur ve daha sonra bir API'ye gönderir. Bu örnek, geri çağrı fonksiyonları ile derinleşen bir şekilde yapılmıştır ve Callback Hell sorununu göstermektedir:

```js
fs.readFile('veriler.txt', function(err, data) {
  if (err) {
    console.error('Hata: ', err);
  } else {
    api.post('/veriler', data, function(response) {
      if (response.status === 200) {
        console.log('Veriler API\'ye başarıyla gönderildi!');
      } else {
        console.error('API\'ye veriler gönderilemedi!');
      }
    });
  }
});
```

Yukarıdaki kodda, ilk olarak `fs.readFile` fonksiyonu çağrılır ve dosya okunduktan sonra, ikinci bir işlem olan API'ye gönderişi yapmak için bir geri çağrı fonksiyonu kullanılır. Bu geri çağrı fonksiyonunda ise bir sonraki işlem gerçekleştirilir. Daha fazla işlem eklendikçe, bu kod daha da karmaşık hale gelebilir ve Callback Hell sorunu oluşabilir.

# PROMISE metotları ödev konusu Promise.All() gibi.

 &nbsp; &nbsp; &#9702; Promise.all(): Bir dizi Promise nesnesi alır ve hepsi tamamlandığında geri çağrı işlevini çağırır.

 &nbsp; &nbsp; &#9702;Promise.race(): Bir dizi Promise nesnesi alır ve herhangi birisi tamamlandığında geri çağrı işlevini çağırır.

 &nbsp; &nbsp; &#9702;Promise.resolve(): Çözülmüş bir Promise nesnesi döndürür.

 &nbsp; &nbsp; &#9702;Promise.reject(): Reddedilmiş bir Promise nesnesi döndürür.

 &nbsp; &nbsp; &#9702;Promise.finally(): Promise zincirinin sonunda çalışacak bir işlev ekler.

# async await deep dive arastirma konusu

Async/await, eşzamansız programlama yapmak için JavaScript'te tanımlanmış bir özelliktir. Eşzamansız programlama, birden fazla görevin aynı anda yürütülmesine izin veren bir kod yazma yöntemidir. Eşzamansız programlamada, görevler sırayla yürütülmek yerine aynı anda yürütülebilir.

Async/await kullanmak için, `async function` sözdizimini kullanarak bir coroutine fonksiyonu tanımlamanız gerekir. Bir coroutine fonksiyonu, diğer fonksiyonlardan farklı olarak `await` ifadesini kullanarak bir asenkron fonksiyonun sonucunu bekleyebilir. Bu sayede, diğer fonksiyonların çalışmasını durdurmadan bir işlem tamamlanana kadar bekleme yapılabilir.

Örneğin, aşağıdaki kod bloğunda, `fetchData()` fonksiyonu veri çekerken beklenirken, diğer işlemler devam edebilir:

```js
async function main() {
  console.log("Başladı");
  const data = await fetchData();
  console.log(data);
  console.log("Bitti");
}

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Veri"), 2000);
  });
}

main();
```

Bu örnekte, `main()` fonksiyonu `await fetchData()` satırında bekleyecektir, ancak beklerken diğer işlemler devam eder. 2 saniye sonra, `fetchData()` işlemi tamamlandığında, sonuç `data` değişkeninde depolanacak ve son satırda "Bitti" mesajı yazdırılacak.

Böylece async/await, JavaScript'te eşzamanlı işlemler yapmak için kullanışlı bir araçtır. Ancak, doğru kullanılmazsa, kodunuzda hatalar oluşabilir veya performans sorunları oluşabilir. Bu nedenle, async/await'ın doğru kullanımını öğrenmek önemlidir.