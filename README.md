# 🛠️ Akıllı Arıza Takip Sistemi

![React Native](https://img.shields.io/badge/React_Native-Mobile-61DAFB)
![Expo](https://img.shields.io/badge/Expo-Router-000020)
![JavaScript](https://img.shields.io/badge/JavaScript-JSX-F7DF1E)
![Hafta](https://img.shields.io/badge/Hafta-6-AF6676)

## 👩‍💻 Öğrenci Bilgileri

| Bilgi            | Açıklama                    |
| ---------------- | --------------------------- |
| Ad Soyad         | Hayrünnisa Sümer            |
| Ders             | Mobil Programlama           |
| Hafta            | 6                           |
| Konu             | React Native ve Expo Router |
| Proje            | Akıllı Arıza Takip Sistemi  |
| Programlama Dili | JavaScript (JSX)            |

---

## 📌 Projenin Amacı

Bu proje, önceki hafta geliştirilen Akıllı Arıza Talep Yönetimi uygulamasının Expo Router kullanılarak geliştirilmiş yeni sürümüdür.

Uygulama ekranlara ve yeniden kullanılabilir bileşenlere ayrılmıştır. Ekranlar arasında gezinme, dinamik rota oluşturma ve seçilen arızanın bilgilerini ayrı bir detay ekranında gösterme özellikleri eklenmiştir.

---

## 🚀 Uygulamanın Özellikleri

- Ana ekranda toplam talep ve durum özeti
- Arıza listesine geçiş
- Benzersiz ID ile arıza oluşturma
- Arıza başlığı, açıklaması, konumu ve kategorisi girme
- Boş alan kontrolü
- Arıza başlığına göre anlık arama
- Kısa basma ile arıza detay ekranına geçiş
- Uzun basma ile silme onayı
- Arıza durumunu değiştirme
- Duruma göre farklı renklerde etiket gösterme
- Ekranlar arasında ortak veri yönetimi
- Hatalı ID kontrolü
- İşlem sonucu kullanıcıya bildirim gösterme
- Detay ekranından listeye geri dönme

---

## 🆕 Hafta 5 ve Hafta 6 Karşılaştırması

| Özellik                | Hafta 5 | Hafta 6 |
| ---------------------- | ------- | ------- |
| Arıza oluşturma        | ✅      | ✅      |
| Arıza arama            | ✅      | ✅      |
| Arıza silme            | ✅      | ✅      |
| Durum değiştirme       | ✅      | ✅      |
| Ayrı ana ekran         | ❌      | ✅      |
| Expo Router            | ❌      | ✅      |
| Stack navigasyonu      | ❌      | ✅      |
| Dinamik detay rotası   | ❌      | ✅      |
| Hatalı ID kontrolü     | ❌      | ✅      |
| Ortak Context yapısı   | ❌      | ✅      |
| Arıza konumu           | ❌      | ✅      |
| Ayrı bileşen dosyaları | ❌      | ✅      |

Önceki haftanın temel özellikleri korunarak uygulama daha düzenli ve geliştirilebilir bir yapıya dönüştürülmüştür.

---

## 📱 Uygulama Ekranları

| Ekran         | Rota             | Görevi                                            |
| ------------- | ---------------- | ------------------------------------------------- |
| Ana Ekran     | `/`              | Talep özetini ve navigasyon butonlarını gösterir. |
| Arıza Listesi | `/ariza-listesi` | Arıza taleplerini listeler.                       |
| Yeni Arıza    | `/yeni-ariza`    | Yeni arıza kaydı oluşturur.                       |
| Arıza Detayı  | `/ariza/[id]`    | Seçilen arızanın bilgilerini gösterir.            |

### Dinamik Rota Örnekleri

- `/ariza/101` — Bilgisayar arızası
- `/ariza/102` — İnternet arızası
- `/ariza/103` — Yazıcı arızası
- `/ariza/999` — Bulunamayan arıza kontrolü

---

## 📂 Proje Dosya Yapısı

```text
Lab6-ArizaTakip/
│
├── app/
│   ├── _layout.jsx
│   ├── index.jsx
│   ├── ariza-listesi.jsx
│   ├── yeni-ariza.jsx
│   └── ariza/
│       └── [id].jsx
│
├── components/
│   ├── TicketCard.jsx
│   └── StatusBadge.jsx
│
├── context/
│   └── TicketContext.jsx
│
├── data/
│   └── tickets.js
│
├── assets/
├── theme.js
├── App.js
├── app.json
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧩 Yeniden Kullanılabilir Bileşenler

### TicketCard

Her arıza kaydı için yeniden kullanılan kart bileşenidir.

- Arıza numarası
- Arıza başlığı
- Arıza konumu
- Arıza kategorisi
- Arıza durumu
- Detay ekranına geçiş
- Uzun basma ile silme işlemi

### StatusBadge

Arızanın mevcut durumunu renkli bir etiket olarak gösteren bileşendir.

| Durum       | Renk    |
| ----------- | ------- |
| 🟠 Bekliyor | Turuncu |
| 🔵 İşlemde  | Mavi    |
| 🟢 Çözüldü  | Yeşil   |

### TicketContext

Ana ekran, arıza listesi, yeni arıza ve detay ekranlarının aynı talep verilerine ulaşmasını sağlar.

Yeni talep ekleme, talep silme ve durum değiştirme işlemleri ortak state üzerinden gerçekleştirilir.

---

## 🎨 Tasarım ve Renk Paleti

Uygulamada önceki haftalarda kullanılan renk paleti korunmuştur.

| Renk      | HEX Kodu  | Kullanım Alanı               |
| --------- | --------- | ---------------------------- |
| Lemonade  | `#FAD272` | Başlıklar ve butonlar        |
| Sea Paint | `#0F4E77` | Yazılar ve ikonlar           |
| Succulent | `#89A376` | Olumlu durumlar              |
| Honey     | `#E7BD8B` | Kart kenarları ve seçenekler |
| Cinnapink | `#AF6676` | Ana işlem butonları          |
| White     | `#FFFFFF` | Ekran arka planı             |

Kartların ve butonların kolay ayırt edilebilmesi için farklı renkler kullanılmıştır. Durum etiketleri kullanıcının arızanın hangi aşamada olduğunu daha kolay anlamasını sağlar.

---

## 💻 Kullanılan Teknolojiler

- React Native
- Expo
- Expo Router
- JavaScript
- JSX
- React Context API
- useState
- useRef
- FlatList
- Pressable
- StyleSheet
- Flexbox
- Ionicons
- Stack Navigation
- useRouter
- useLocalSearchParams

---

## 🔀 Navigasyon İşlemleri

| Kullanılan yapı        | Görevi                                      |
| ---------------------- | ------------------------------------------- |
| Stack                  | Ekranlar arasındaki gezinmeyi yönetir.      |
| Stack.Screen           | Ekranların navigasyon ayarlarını belirler.  |
| router.push()          | Yeni bir ekran açar.                        |
| router.back()          | Önceki ekrana döner.                        |
| router.replace()       | Mevcut ekranın yerine başka bir ekran açar. |
| useLocalSearchParams() | Rotadan gelen ID bilgisini alır.            |
| find()                 | ID ile eşleşen arıza kaydını bulur.         |

---

## ⚙️ Kurulum ve Çalıştırma

### 1. Projeyi bilgisayarınıza indirin

```bash
git clone https://github.com/Nisa-q/lab5-akilli_ariza_talep_yonetimi.git
```

### 2. Proje klasörüne girin

```bash
cd lab5-akilli_ariza_talep_yonetimi
```

### 3. Gerekli kütüphaneleri yükleyin

```bash
npm ci
```

### 4. Expo'yu başlatın

```bash
npx expo start
```

### 5. Uygulamayı açın

Terminalde oluşan QR kodu Expo Go uygulaması ile okutun.

Önbellek kaynaklı bir sorun yaşanırsa aşağıdaki komut kullanılabilir:

```bash
npx expo start --clear
```

---

## ✅ Test Sonuçları

| Test | Yapılan İşlem                      | Beklenen Sonuç               | Sonuç    |
| ---- | ---------------------------------- | ---------------------------- | -------- |
| T1   | Ana ekrandan arıza listesine geçiş | Liste açılmalı               | ✅ Geçti |
| T2   | 101 numaralı arızayı açma          | Doğru detaylar görünmeli     | ✅ Geçti |
| T3   | Detay ekranından geri dönme        | Liste tekrar açılmalı        | ✅ Geçti |
| T4   | 999 numaralı arızayı açma          | Arıza bulunamadı uyarısı     | ✅ Geçti |
| Ek 1 | Yeni arıza oluşturma               | Listeye yeni kayıt eklenmeli | ✅ Geçti |
| Ek 2 | Durum değiştirme                   | Durum etiketi güncellenmeli  | ✅ Geçti |
| Ek 3 | Arıza başlığı arama                | Uygun kayıtlar gösterilmeli  | ✅ Geçti |
| Ek 4 | Karta uzun basma                   | Silme onayı açılmalı         | ✅ Geçti |

Testler Expo Go üzerinden gerçek telefon kullanılarak gerçekleştirilmiştir.

---

## 🐞 Karşılaşılan Hatalar ve Çözümleri

### Hata 1 — Başlangıç dosyası bulunamadı

**Sorun:** Expo uygulamayı başlatırken başlangıç dosyasını bulamadı.

**Neden:** Expo Router kurulumu ve başlangıç dosyası ayarları eksik kalmıştı.

**Çözüm:** Gerekli kütüphaneler yüklenerek package.json dosyasındaki main değeri expo-router/entry olarak düzenlendi.

### Hata 2 — Varsayılan Expo ekranının açılması

**Sorun:** Uygulamanın kendi ana ekranı yerine Expo'nun varsayılan ekranı açıldı.

**Neden:** app klasöründe varsayılan index.js dosyası bulunuyordu.

**Çözüm:** Başlangıç ekranı dosyaları düzenlenerek hazırlanan index.jsx ekranının açılması sağlandı.

### Hata 3 — TicketContext modülü bulunamadı

**Sorun:** Uygulama TicketContext dosyasını bulamadığı için açılmadı.

**Neden:** Bazı bileşenler ve ortak veri dosyaları eksik kalmıştı.

**Çözüm:** Yapay zekâ desteğiyle eksik dosyalar tamamlandı, import yolları düzenlendi ve uygulama yeniden çalıştırıldı.

---

## 📊 Veri Yönetimi

Uygulamada veritabanı veya harici API kullanılmamıştır.

Arıza bilgileri yerel state içerisinde tutulmaktadır. Context API sayesinde bütün ekranlar aynı arıza verilerini kullanmaktadır.

Uygulama tamamen yeniden başlatıldığında sonradan eklenen kayıtlar sıfırlanır ve başlangıç verileri tekrar gösterilir.

---

## 📝 Kısa Değerlendirme

Bu hafta önceki arıza takip uygulamasını Expo Router kullanarak geliştirdim. TicketCard ve StatusBadge bileşenlerini ayrı dosyalara ayırdım. Ekranlar arasında geçiş yapmak için router.push ve router.back yapılarını kullandım. Dinamik rota üzerinden gelen ID bilgisini useLocalSearchParams ile alarak doğru arızanın detaylarını gösterdim. Uygulamanın kurulumu sırasında başlangıç dosyası ve eksik modül hatalarıyla karşılaştım. Yapay zekâ desteğiyle bu hataları gidererek uygulamayı telefonumda çalıştırdım. İleride uygulamaya kalıcı veri kaydetme ve kullanıcı giriş sistemi eklemek isterim.

---

## 📸 Uygulama Ekran Görüntüleri

Aşağıda uygulamanın gerçek telefon üzerinden alınan ekran görüntüleri bulunmaktadır.

![Hafta 6 Arıza Takip Ekran Görüntüleri](Hayrünnisa_Sümer_Hafta6_ArizaTakip.png)

---

**Hayrünnisa Sümer | Mobil Programlama | Hafta 6**
