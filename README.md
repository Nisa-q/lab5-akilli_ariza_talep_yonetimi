# Akıllı Arıza Talep Yönetimi

## Öğrenci Bilgileri

Ad Soyad: Hayrünnisa Sümer  
Ders: Mobil Programlama  
Hafta: 5

## Projenin Amacı

React Native ve Expo kullanarak arıza taleplerinin oluşturulabildiği, listelenebildiği, silinebildiği ve durumlarının değiştirilebildiği bir mobil uygulama geliştirmek.

## Uygulamanın Özellikleri

- Arıza başlığı ve açıklaması girme
- Arıza kategorisi seçme
- Boş alanların kontrol edilmesi
- Benzersiz numara ile talep oluşturma
- Birden fazla talebi listeleme
- Kısa basma ile talep detaylarını görüntüleme
- Uzun basma ile silme onayı
- Talep durumunu değiştirme
- Kullanıcıya işlem bildirimleri gösterme
- Arıza başlığına göre anlık arama

## Kullanılan Teknolojiler

- React Native
- Expo
- JavaScript ve JSX
- useState
- useRef
- Flexbox
- FlatList
- Pressable
- Ionicons
- SafeAreaView

## Kurulum ve Çalıştırma

```bash
npm install
npx expo start
```

Expo Go uygulaması ile QR kod okutularak proje çalıştırılabilir.

## Özgün Özellik

Arıza başlıklarına göre anlık arama özelliği eklendi. Kullanıcı arama kutusuna yazdıkça uygun talepler listelenir. Arama temizlendiğinde bütün talepler tekrar gösterilir.

## Veri Yönetimi

Talepler yerel state içerisinde tutulmaktadır. Veritabanı veya API kullanılmamaktadır. Uygulama yeniden başlatıldığında kayıtlar sıfırlanır.

## Yapay Zekâ Kullanımı

Projenin geliştirilmesinde ChatGPT'den kodlama desteği alınmıştır. Üretilen kod projeye eklenmiş ve uygulama telefon üzerinde çalıştırılarak test edilmiştir.

## Ekran Görüntüleri

![Uygulama ekran görüntüleri](ekran-goruntuleri.png)
