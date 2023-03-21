# JAVASCRİPT DECORATORS

Bir decorator, bir fonksiyonu veya sınıfı değiştirmek veya geliştirmek için kullanılan bir fonksiyondur. Decorator'lar, fonksiyonel bir yaklaşımı benimseyen JavaScript geliştiricileri için son derece yararlıdır.

Bir JavaScript decorator'ı kullanarak, bir fonksiyonun veya sınıfın davranışını değiştirebilirsiniz. Bunun için, decorator fonksiyonu, dekore edilecek fonksiyon veya sınıfın üzerinde çalışan ve onu değiştiren bir fonksiyondur.

Örneğin, aşağıdaki örneklerde, birkaç farklı decorator kullanarak bir sınıfın davranışını değiştiriyoruz:

```js
function log(target, name, descriptor) {
  const original = descriptor.value;
  if (typeof original === 'function') {
    descriptor.value = function(...args) {
      console.log(`Arguments for ${name}: ${args}`);
      try {
        const result = original.apply(this, args);
        console.log(`Result from ${name}: ${result}`);
        return result;
      } catch (e) {
        console.log(`Error from ${name}: ${e}`);
        throw e;
      }
    }
  }
  return descriptor;
}

function freeze(target) {
  Object.freeze(target);
}

@freeze
class Example {
  @log
  add(a, b) {
    return a + b;
  }
}

const example = new Example();
example.add(1, 2);
```

Bu örnekte, `@freeze` decorator'u, `Example` sınıfını dondurur. Bu, sınıfın özelliklerinin ve davranışlarının değiştirilemez hale gelmesini sağlar.

Ayrıca, `@log` decorator'u, `Example` sınıfındaki `add` yöntemini değiştirir. Bu decorator, `add` yöntemi çağrıldığında, yöntemin aldığı argümanları ve sonucu konsola yazdırır.

Bu örnekteki decorator'lar, bir sınıfın veya yöntemin davranışını değiştirmek için kullanılan örneklerdir. Ancak, decorator'lar, JavaScript'teki herhangi bir işlev veya nesne için kullanılabilirler.

# OPENAPI STANDARTS

OpenAPI spesifikasyonu, API'lerin endpoint'lerinin standart bir şekilde tasarlanmasını sağlar. İşte OpenAPI endpoint standartları:

1. Endpoint Adlandırma: Endpoint'lerin isimlendirilmesi, ilgili işlevi açıkça tanımalıdır. Endpoint isimleri, küçük harfler, tireler veya alt çizgilerle ayrılabilir.

2. Endpoint Yolu: Endpoint yolu, URL'nin bir parçasıdır ve ilgili kaynağı tanımlamalıdır. Yolun başında bir eğik çizgi (/) kullanılmalıdır.

3. Endpoint Yöntemleri: Bir endpoint, HTTP yöntemleri (GET, POST, PUT, DELETE vb.) kullanarak erişilebilir hale getirilir. Bir endpoint birden fazla HTTP yöntemi destekleyebilir.

4. İstek Gövdeleri: Bir istek gövdesi, endpoint'e veri göndermek için kullanılır. Gövde, JSON veya XML formatında olabilir.

5. Yanıt Gövdeleri: Bir yanıt gövdesi, bir endpoint'ten dönen veriyi içerir. Gövde, JSON veya XML formatında olabilir.

6. Parametreler: Parametreler, endpoint'lere ek bilgi sağlamak için kullanılır. Sorgu parametreleri, istek başlıkları ve yol parametreleri gibi örnekler bulunur.

7. Hatalar: Endpoint'lerin yanıt verebileceği hatalar tanımlanmalıdır. Hatalar, hata kodu, hata mesajı ve olası çözümleri içeren bir JSON veya XML formatında olabilir.

8. Güvenlik: Endpoint'lerin güvenliği, kimlik doğrulama ve yetkilendirme gibi konuları içerebilir. API'ye erişmek için kullanılacak güvenlik protokolleri belirtilmelidir, örneğin OAuth2 veya API Anahtarı. Ayrıca, kullanıcıların erişim haklarını yönetmek için roller veya izinler gibi mekanizmalar tanımlanabilir.

9. Versiyonlama : Versiyonlama, API'nin geriye dönük uyumluluğunu sağlamak için kullanılır. Endpoint yolu, API'nin sürümünü içeren bir önek içerebilir, örneğin /v1 veya /v2 gibi.

10. Dökümantasyon: API'nin kullanımını kolaylaştırmak için belgelendirme sağlanmalıdır. OpenAPI spesifikasyonu, otomatik olarak API belgeleri oluşturmak için kullanılabilir. Belgelemelerde, API'nin kullanımı, örnek istekler ve yanıtlar, parametreler ve hatalar gibi konular ele alınabilir.

Bu OpenAPI endpoint standartlarına uyarak, anlaşılır ve kullanımı kolay bir API tasarlayabilirsiniz. Standartlar, API'yi geliştirmek ve sürdürmek için kullanılabilecek bir referans noktası sağlar.