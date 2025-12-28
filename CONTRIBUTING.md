# Katkıda Bulunma Rehberi

**Context-Aware Smart IDE Plugin** projesine katkıda bulunmak istediğiniz için teşekkür ederiz! Açık kaynak topluluğunun desteğiyle bu projeyi daha iyi yerlere getirebiliriz.

## Nasıl Katkıda Bulunabilirsiniz?

### 1. Hata Bildirimi (Bug Reporting)
Karşılaştığınız hataları GitHub Issues üzerinden bildirebilirsiniz. Lütfen hatayı yeniden oluşturmak için gerekli adımları ve ortam bilgilerinizi (VS Code versiyonu, vb.) eklemeyi unutmayın.

### 2. Özellik İsteği (Feature Requests)
Eklentide görmek istediğiniz yeni özellikleri Issues bölümünde "enhancement" etiketiyle paylaşabilirsiniz.

### 3. Pull Request (PR) Gönderme
1.  Projeyi 'fork'layın.
2.  Kendi özellik dalınızı (feature branch) oluşturun (`git checkout -b ozellik/yeni-ozellik`).
3.  Değişikliklerinizi yapın ve commit'leyin (`git commit -m 'Yeni özellik eklendi'`).
4.  Dalınızı push'layın (`git push origin ozellik/yeni-ozellik`).
5.  Bir Pull Request oluşturun.

## Geliştirme Ortamı Kurulumu

1.  Node.js ve NPM'in yüklü olduğundan emin olun.
2.  Depoyu klonlayın ve kök dizinde `npm install` komutunu çalıştırın.
3.  `F5` tuşu ile eklentiyi VS Code hata ayıklama modunda (Extension Development Host) çalıştırabilirsiniz.

## Kod Standartları

- TypeScript kullanıyoruz. Lütfen tip güvenliğine dikkat edin.
- `npm run lint` komutu ile kodunuzu kontrol edebilirsiniz.

İlginiz ve katkılarınız için teşekkürler!
