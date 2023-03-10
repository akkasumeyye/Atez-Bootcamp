# Regex
Node.js, JavaScript tabanlı bir platformdur ve JavaScript dilindeki düzenli ifadeleri (regex) kullanmanızı sağlar. Düzenli ifadeler, bir metin içinde belirli desenleri aramak veya belirli desenlere uygun metinleri değiştirmek için kullanılır.

Düzenli ifadeler, / karakterleri arasına yazılan bir desenle tanımlanır. Örneğin, /cat/ deseni, bir metin içindeki "cat" kelimesini arar. Bu desen, aynı zamanda bir RegExp nesnesi olarak da tanımlanabilir:

```javascript
 const regex = /cat/;
 ```

Düzenli ifadeler, metin içinde belirli karakterleri veya karakter gruplarını aramak için özel karakterler ve sembollerle de kullanılabilir. Örneğin:

    . karakteri, herhangi bir karakteri temsil eder.
    * karakteri, önceki karakterin 0 veya daha fazla kez tekrarlandığını ifade eder.
    + karakteri, önceki karakterin 1 veya daha fazla kez tekrarlandığını ifade eder.
    [] karakterleri, içindeki karakterlerin herhangi birinin eşleşmesini sağlar.
    \ karakteri, sonraki karakterin özel anlamını kaldırır.

Örneğin, /c.t/ deseni, bir metin içinde "cat", "cut", "cot" gibi herhangi bir karakterle biten "ct" ile başlayan bir kelimeyi eşleştirir.

Düzenli ifadeler, Node.js'deki String nesnesinin match() ve replace() metodları gibi birçok yöntemle kullanılabilir. Bu yöntemler, bir düzenli ifadeyle eşleşen metinleri aramanızı veya değiştirmenizi sağlar.

Özetle, Node.js'teki düzenli ifadeler, metin işleme işlemlerinde çok yaygın olarak kullanılan ve belirli desenleri aramak veya değiştirmek için kullanılan güçlü bir araçtır.

# Http Status Code

* HTTP (Hypertext Transfer Protocol) durum kodları, sunucuların istemcilere (örneğin web tarayıcılara) bir işlem veya istek yanıtı olarak gönderdiği üç haneli kodlardır. İşlem başarılı veya başarısız olsa da, istemcilerin işlemle ilgili durumu anlamalarına yardımcı olur. İşte bazı yaygın HTTP durum kodları ;
&nbsp;
    &nbsp; &nbsp; &#9702; 200 OK: İstek başarılı oldu ve sunucu istenilen kaynakları başarıyla iletti.
    &nbsp; &nbsp; &#9702; 201 Created: İstek başarılı oldu ve sunucu istemcinin talep ettiği bir kaynağı başarıyla oluşturdu.
    &nbsp; &nbsp; &#9702; 400 Bad Request: İstek yapılamadı veya istek yapılırken bir hata oluştu. Bu durumda, istek tamamlanamadı ve istemci hatanın ne olduğunu belirten bir mesaj alır.
    &nbsp; &nbsp; &#9702; 401 Unauthorized: İstemci, kimlik doğrulama yapmadan kaynaklara erişmeye çalıştı. Bu durumda, istemci kaynaklara erişemeyecek ve kimlik doğrulama yapması gerektiği belirten bir hata mesajı alır.
    &nbsp; &nbsp; &#9702; 403 Forbidden: İstemci, kaynaklara erişmeye çalıştı, ancak sunucu bu erişime izin vermedi. Bu durumda, istemci kaynaklara erişemeyecek ve bir hata mesajı alır.
    &nbsp; &nbsp; &#9702; 404 Not Found: Sunucu istenilen kaynağı bulamadı. Bu durumda, istemci kaynakların mevcut olmadığını belirten bir hata mesajı alır.
    &nbsp; &nbsp; &#9702; 500 Internal Server Error: Sunucu, istemci tarafından yapılan isteği yerine getiremedi ve bir hata oluştu. Bu durumda, istemci genellikle bir sunucu hatası olduğunu belirten bir hata mesajı alır.

Bu sadece bazı örneklerdir ve HTTP durum kodları farklı senaryolarda farklı şekillerde kullanılabilir. Bu durum kodlarının amacı, sunucuların istemcilerle etkileşim sırasında birbirleriyle iletişim kurmasını kolaylaştırmak ve hataları tanımlamak için standart bir yol sağlamaktır.

# Node Event

Node.js, olay temelli (event-driven) bir yapıya sahiptir ve birçok işlevi olaylar (events) yoluyla yönetir. Bir olay, bir uygulamada gerçekleşen herhangi bir eylemi veya durumu temsil eder ve bir dizi işlevi tetikleyebilir.

Node.js'deki olaylar, `events` modülü tarafından sağlanır. Bu modül, `EventEmitter` adlı bir sınıf içerir. Bu sınıf, olayların oluşturulmasını, dinlenmesini ve işlenmesini sağlar.

Bir olay oluşturmak için, `EventEmitter` sınıfından bir nesne oluşturmanız gerekir. Bu nesne, `on()` veya `addListener()` yöntemlerini kullanarak bir veya daha fazla olay dinleyici (event listener) işlevi eklemenize olanak tanır. Bir olay tetiklendiğinde, bu dinleyicilerin her biri sırayla çalıştırılır.

Örneğin, `EventEmitter` sınıfından bir nesne oluşturup `on()` yöntemini kullanarak "start" adlı bir olaya bir dinleyici ekleyebilirsiniz:

``` javascript
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
  console.log('Started');
});

eventEmitter.emit('start');
```

Bu kod, "start" adlı bir olay oluşturur ve bir dinleyici ekler. `emit()` yöntemi, olayı tetikler ve dinleyicinin çalıştırılmasını sağlar. Yukarıdaki örnekte, olay tetiklendiğinde "Started" metni konsola yazdırılır.

Node.js'deki olaylar, asenkron programlamada önemli bir rol oynar ve özellikle ağ uygulamalarında kullanımı yaygındır. Olaylar, uygulamaların daha esnek, modüler ve genişletilebilir olmasını sağlar ve kodun daha okunaklı ve anlaşılır olmasını sağlar.

# Semantic Versioning

Semantrik sürümleme (Semantic Versioning), yazılım sürümlerinin anlamlı bir şekilde numaralandırılmasını sağlayan bir yöntemdir. Bu yöntem, yazılım geliştiricileri ve kullanıcıları arasında bir anlaşma sağlamak için kullanılır.

Semantrik sürümleme, sürüm numaralarını üç parça halinde tanımlar: major, minor ve patch. Bu numaralar, yazılımın ne kadar büyük bir değişiklik geçirdiğini belirtir.

&nbsp; &nbsp; &#9702; Major: Yazılımın yapısal değişiklikler geçirdiği durumlarda artar. Geriye dönük uyumsuz değişiklikler içerdiği anlamına gelir.

&nbsp; &nbsp; &#9702; Minor: Yazılımın geriye dönük uyumlu yeni özellikler veya fonksiyonlar eklediği durumlarda artar.

&nbsp; &nbsp; &#9702; Patch: Yazılımın geriye dönük uyumlu hata düzeltmeleri yaptığı durumlarda artar.

Sürüm numaraları, noktalarla ayrılır ve örnek olarak "1.2.3" şeklinde gösterilir. Bu numaralar, artan sırayla major, minor ve patch sürüm numaralarını temsil eder.

Semantrik sürümleme, yazılım geliştiricilerinin kodlarında yaptıkları değişiklikleri sürüm numaralarına yansıtmalarını ve bu değişiklikleri açık bir şekilde belirtmelerini gerektirir. Böylece, yazılım sürümlerinde yapılan değişiklikler daha anlaşılır hale gelir ve kullanıcılar, yazılımın hangi sürümünün hangi değişiklikleri içerdiğini daha kolay anlayabilirler. Bu sayede, yazılımın kullanımı daha güvenli ve kararlı hale gelir. Semantrik sürümleme, açık kaynak yazılım topluluklarında sıkça kullanılan bir yöntemdir ve pek çok popüler yazılım paketi bu yöntemi kullanmaktadır.

# Git Commit Conventions

Git Commit Conventions, yazılım geliştirme sürecinde daha okunaklı, anlaşılır ve düzenli bir git commit geçmişi oluşturmak için kullanılan bir yöntemdir. Bu yöntem, commit mesajlarının belirli bir format ve düzen içinde yazılmasını sağlar ve proje geliştiricilerinin commit mesajlarını daha tutarlı hale getirmesine yardımcı olur.

Git Commit Conventions, commit mesajlarının başında yer alan küçük bir ön ek ile başlar. Bu ön ek, bir çeşit kısaltma veya etiketlemedir ve commit'in ne tür bir değişiklik içerdiğini belirtir. Bu etiketler genellikle, "feat" (yeni bir özellik eklendi), "fix" (bir hata düzeltildi), "docs" (dokümantasyon güncellendi), "refactor" (kod yeniden düzenlendi) gibi anahtar kelimelerdir.

Ayrıca, Git Commit Conventions'da commit mesajının başlığı, ayrı bir satırda yazılır ve genellikle 50 karakterle sınırlandırılır. Başlık, commit'in ana fikrini veya değişikliğin özetini içermelidir. Daha sonra, başlık ile bir boşluk bırakılarak commit mesajının detayları yazılır.

Git Commit Conventions, bir proje için belirli bir stil kılavuzu belirlemeyi amaçlar ve geliştiricilerin commit mesajlarını daha tutarlı ve anlaşılır hale getirir. Bu sayede, proje geçmişi daha kolay takip edilebilir ve gelecekteki geliştirme çalışmalarında daha verimli bir şekilde kullanılabilir.

Git Commit Conventions kullanmanın pek çok avantajı vardır:

1. Daha okunaklı ve anlaşılır commit geçmişi: Git Commit Conventions, commit mesajlarının belirli bir formatta ve düzen içinde yazılmasını sağlar. Bu sayede, proje geçmişi daha okunaklı ve anlaşılır hale gelir.

2. Daha tutarlı commit mesajları: Git Commit Conventions, proje geliştiricilerinin commit mesajlarını daha tutarlı hale getirir. Bu sayede, projenin tarihçesi daha tutarlı ve anlaşılır bir şekilde yazılır.

3. Kolay takip edilebilir geçmiş: Git Commit Conventions, proje geçmişinin kolay takip edilebilmesini sağlar. Projedeki değişikliklerin ne zaman, neden ve nasıl yapıldığını anlamak daha kolay olur.

4. Kolay geri alma: Git Commit Conventions kullanarak yapılan değişiklikler, daha iyi bir şekilde belgelenir ve neden yapıldıkları açıklanır. Bu sayede, bir hata ortaya çıkarsa veya geri alma gerektiren bir durum oluşursa, geri alma işlemi daha kolay ve güvenli bir şekilde yapılabilir.

5. Proje geliştiricileri arasında uyum: Git Commit Conventions, bir proje için belirli bir stil kılavuzu belirler. Bu sayede, proje geliştiricileri arasında uyum sağlanır ve projenin daha tutarlı bir şekilde geliştirilmesi sağlanır.

Bu nedenlerden dolayı, Git Commit Conventions kullanmak yazılım geliştirme sürecinde çok önemlidir ve daha iyi bir yazılım geliştirme deneyimi sunar.
