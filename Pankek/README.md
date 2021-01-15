# Hicelerate Pancake
## hicelerate-pancake
Hicelerate yazilim gelistirme adaylari icin örnek proje

## Nedir?
Hicelerate Pancake, Angular ve Javascript bilgi seviyenizi anlayabilmemiz için tasarlanmış örnek bir projedir. 
Amaç, sizi bir sınava tabi tutmak değil, Angular framework unu bilmeseniz dahı bu projeyi dokümantasyondan ve bizimle (asenkron) iletişim kurarak nasıl tamamlayabileceğinizi görmektir.


## Proje Kriterleri
- Aşağıda URL si verilen API den alacağınız kurslar datasını bir tabloda göstermelisiniz.
  - API URL : https://api.zaguru.com/api/Classes/getClasses
- API den alacaginiz datanın tamamı tabloda doğru formatta görümeli (Örnek: tarih alani tarih olarak okunabilmeli)
- Tabloda bulunacak her satır için bir "Katılımcıları Düzenle" tusu en son kolonda bulunmali
- Katılımcıları Düzenle tuşuna basınca, düzenleme için bir modal açılmalı 
  - Açılan modal da bulunacak bir formda: 
    - Hangi kursun katılımcılarını düzenlediğimizi anlayabilmek için kursun adı ve Idsi yazmalı
    - Kursa katılması beklenen kişi sayısını girebileceğimiz bir input bulunmalı
    - Açıklama girebileceğimiz bir input (textarea) bulunmalı
    - Kursun aktif olup olmadigini set etmek icin bir checkbox olmali
    - Daha önce bu kurs için bu bilgiler kaydedilmişse; daha önceki bilgileri modaldaki formda görmeli ve düzenleyebilmeliyiz
    - Modal ın en altında bulunacak Kaydet tuşu ile bu bilgiler kaydedilince modal kapanmalı
    - Modal kapanınca, tablodaki 'Katılımcı Sayısı' alanında, modaldaki forma yazılmış olan sayı görünmeli. 
      - Dolayısıyla tabloda tablo datasının yanı sıra Katilimci Sayisi kolonu da bulunmalı
    - Eger kurs pasif olarak set edilmisse, tabloda, kursun oldugu satirda kursun bilgileri hucrelerde gosterilmemeli. Bunun yerine bu satirda "{{Kursun Adi}} su anda ogrenci kabul etmemektedir" yazmali. Bu satiri ayri bir komponent olarak yapin ve kursun adini bu komponente input olarak verin. Ozetle, eger kurs pasifse bu komponent gosterilmeli, aktifse (pasif degilse) kursun bilgileri tablonun hucrelerinde yazmali
    - Modaldaki Açıklama alanına kaydedilen yazı, tablodaki katılımcı sayısının üzerine (fare imleci ile) gelince popover veya tooltip olarak görünmeli
    - Katılımcı Sayısı, kursun aktif olup olmadigi ve Açıklama bilgileri bir API aracılığı ile database e kaydedilmeyeceği için sadece hafızada (geçici) kayıtlı kalabilir. Fakat sayfa kapatılmadığı/yenilenmediüi sürece kaydedilen bilgileri görebilmeliyiz

## Projeyi geliştirken 
- Herhangi bir Angular boilerplate / hazır template proje kullanmayın. Angular CLI ile projeyi ve componentleri yaratabilirsiniz.
  - Angular CLI dokümantasyonu için: https://angular.io/cli
- Tablo, modal, tooltip, popover gibi elemanlari Ng Zorro veya Angular Material kütüphanelerinden kullanın
  - NG Zorro komponentlerini kullanmaya karar verirseniz, aşağıdaki komponentler proje için gerekli olacaktır:
    - NG Zorro Tablo https://ng.ant.design/components/table/en
    - NG Zorro Modal https://ng.ant.design/components/modal/en
    - NG Zorro Popover https://ng.ant.design/components/popover/en
    - NG Zorro Form ve Input https://ng.ant.design/components/form/en ve https://ng.ant.design/components/input/en
  - Angular Material komponentlerini kullanmaya karar verirseniz, aşağıdaki komponentler proje için gerekli olacaktır:
   - Angular Material Tablo https://material.angular.io/components/table/overview
   - Angular Material Dialog https://material.angular.io/components/dialog/overview
   - Angular Material Tooltip https://material.angular.io/components/tooltip/overview
   - Angular Material Form ve Inputlari https://material.angular.io/components/input/overview


## Bunlara da dikkat edin
- Takıldığınız ya da anlamadığınız bir şey olduğunda mail veya Slack aracılığı ile iletişim kurun, sorunuzu sorun. 
  - İletişim proje geliştirmenin anahtarıdır.
- Angular ve kullanacağınız komponent kütüphanesinin örneklerinden ve dokümantasyonundan yararlanın
- Hicelerate Pancake i forklayin. Geliştirdiğiniz kodlari yaratacağınız bir branch e commitleyin ve işiniz bitince (master a karşı) PR açın.
  - Git kullanmayı bilmiyorsanız https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners
  - Git ile ilgili sorularınız olursa sorun.
- Projeyi Angular CLI ile yaratın. https://angular.io/cli
- Mümkün oldukça komponent ve ihtiyaç duyacağınız diğer dosyaları da Angular CLI ile oluşturun (ng generate)
- Elinizden geldikçe Angular Style Guide a uymaya çalışın https://angular.io/guide/styleguide

İlgi ve çaba gösterdiğiniz için teşekkür ederiz. Bu projenin, sizi tanımamızı sağlayacağı kadar, sizin gelişiminize de destek olmasını dileriz.
