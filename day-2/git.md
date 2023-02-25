git source control tool'dur.

git clone "link" bir repoyu bilgisayarıma klonla diyoruz.

git branch ==> bulunduğumuz branşı gösterir
git pull ==> bu branşın en güncel halini getir

bir task verilir ve bu taskı yapmamız istenir. yeni bir feature üzerinde calısıyorsak syntax :
feature/branch name

canlıya cıktıgımız bir kodda hata var ve hatayı duzeletecegiz:
bug/branch name

git branch fauture/b1 ==> feature/b1 branch oluşturduk
git checkout feature/b1 ==> brancha geçiş yaparız.

git push --set upstream origin

git checkout master ==> master brancha geciş
git checkout -b bug/b1 ==> hem branchı yarat hemde brancha geçiş yap

duzeltmeler yapıp pushladık git commit -a -m "duzeltme yapildi"

git merge bug/b1 ==> git bu branche senin belirttigin branchı merge'le

git log ==> en son attıgınız kodları gösterir

git checkout -b 24c5877 ==> koddan checkout yapabilmeliyiz
commite dönmeyi sağlamış olduk, hata var mı inceleriz.

fetch kullanmasakta olur zaten pull aynı şeyi yapıyor.

git reset --hard  ==> kod yığını yazdık ama işe yaramadığını düşünüyorum

git stash ==> kasa gibi düşün, kodun hiç kaybolmadığı kasa , orada saklıyoruz görmek istemediğimiz kodlarımızı sonrada apply ile yeniden uyguluyoruz
git stash apply ==> en son yaptığın değişikliği uygular

bu kodu kim yazmış neden yazmış görmedim ; git annoated , git blame


