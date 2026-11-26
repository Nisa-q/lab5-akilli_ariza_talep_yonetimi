import React, { useState, useRef } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Alert,
  StyleSheet,
  StatusBar
} from 'react-native';

import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';

import Ionicons from '@expo/vector-icons/Ionicons';


// 1. KATEGORİ VE DURUM SEÇENEKLERİ

const kategoriler = [
  'Bilgisayar',
  'Yazıcı',
  'İnternet',
  'Yazılım',
  'Diğer'
];

const durumlar = [
  'Bekliyor',
  'İşlemde',
  'Tamamlandı'
];


// 2. DURUM RENKLERİ

// Talebin durumuna göre renk kodu verir
const durumRengi = (durum) => {

  if (durum === 'Bekliyor') {
    return '#C56A12';
  }

  if (durum === 'İşlemde') {
    return '#0F4E77';
  }

  return '#36733A';
};


// Talebin durumuna göre arka plan rengi verir
const durumArkaPlani = (durum) => {

  if (durum === 'Bekliyor') {
    return '#FDF1D1';
  }

  if (durum === 'İşlemde') {
    return '#E1EDF5';
  }

  return '#E7EDDF';
};


// 3. KATEGORİ İKONLARI

// Seçilen kategoriye uygun ikonun adını verir
const kategoriIkonu = (kategori) => {

  if (kategori === 'Bilgisayar') {
    return 'desktop-outline';
  }

  if (kategori === 'Yazıcı') {
    return 'print-outline';
  }

  if (kategori === 'İnternet') {
    return 'wifi-outline';
  }

  if (kategori === 'Yazılım') {
    return 'code-slash-outline';
  }

  return 'construct-outline';
};


// 4. TEKRAR KULLANILABİLİR TALEP KARTI

function TalepKarti({
  talep,
  detayAcik,
  onDetayAc,
  onSil,
  onDurumDegistir
}) {

  return (

    <View style={styles.ticketCard}>

      {/* Kısa basınca detay açılır */}
      {/* Uzun basınca silme onayı açılır */}

      <Pressable

        onPress={() => onDetayAc(talep.id)}

        onLongPress={() => onSil(talep.id)}

        delayLongPress={500}

      >

        {/* Kategori ikonu ve talep numarası */}

        <View style={styles.ticketTop}>

          <View style={styles.ticketIdArea}>

            <View style={styles.categoryIcon}>

              <Ionicons
                name={kategoriIkonu(talep.kategori)}
                size={24}
                color="#0F4E77"
              />

            </View>

            <Text style={styles.ticketId}>
              {talep.id}
            </Text>

          </View>

          {/* Talebin mevcut durumu */}

          <View
            style={[
              styles.statusBadge,
              {
                backgroundColor:
                  durumArkaPlani(talep.durum)
              }
            ]}
          >

            <Text
              style={[
                styles.statusText,
                {
                  color: durumRengi(talep.durum)
                }
              ]}
            >
              {talep.durum}
            </Text>

          </View>

        </View>

        {/* Arıza başlığı */}

        <Text style={styles.ticketTitle}>
          {talep.baslik}
        </Text>

        {/* Arıza kategorisi */}

        <Text style={styles.ticketCategory}>
          {talep.kategori}
        </Text>

        {/* Talebin oluşturulduğu tarih */}

        <Text style={styles.ticketDate}>
          {talep.tarih}
        </Text>

        {/* Detayların açık veya kapalı olduğunu gösterir */}

        <View style={styles.detailToggle}>

          <Text style={styles.detailToggleText}>
            {detayAcik
              ? 'Detayları Gizle'
              : 'Detayları Gör'}
          </Text>

          <Ionicons
            name={
              detayAcik
                ? 'chevron-up'
                : 'chevron-down'
            }
            size={20}
            color="#0F4E77"
          />

        </View>

      </Pressable>


      {/* G5: Karta kısa basıldığında detaylar görünür */}

      {detayAcik && (

        <View style={styles.detailCard}>

          <Text style={styles.detailTitle}>
            Talep Detayları
          </Text>

          <Text style={styles.detailLabel}>
            Talep Numarası
          </Text>

          <Text style={styles.detailValue}>
            {talep.id}
          </Text>


          <Text style={styles.detailLabel}>
            Arıza Başlığı
          </Text>

          <Text style={styles.detailValue}>
            {talep.baslik}
          </Text>


          <Text style={styles.detailLabel}>
            Arıza Açıklaması
          </Text>

          <Text style={styles.detailValue}>
            {talep.aciklama}
          </Text>


          <Text style={styles.detailLabel}>
            Kategori
          </Text>

          <Text style={styles.detailValue}>
            {talep.kategori}
          </Text>


          <Text style={styles.detailLabel}>
            Mevcut Durum
          </Text>

          <Text
            style={[
              styles.detailValue,
              {
                color: durumRengi(talep.durum)
              }
            ]}
          >
            {talep.durum}
          </Text>


          {/* G7: Talep durumunu değiştirme */}

          <Text style={styles.detailLabel}>
            Talep Durumunu Değiştir
          </Text>

          <View style={styles.optionsContainer}>

            {durumlar.map((item) => (

              <Pressable

                key={item}

                onPress={() =>
                  onDurumDegistir(talep.id, item)
                }

                style={[
                  styles.statusButton,

                  talep.durum === item && {
                    backgroundColor: durumRengi(item),
                    borderColor: durumRengi(item)
                  }
                ]}

              >

                <Text
                  style={[
                    styles.statusButtonText,

                    talep.durum === item && {
                      color: '#FFFFFF',
                      fontWeight: 'bold'
                    }
                  ]}
                >
                  {item}
                </Text>

              </Pressable>

            ))}

          </View>

        </View>

      )}

      {/* Kullanıcıya uzun basma özelliğini hatırlatır */}

      <View style={styles.deleteHintArea}>

        <Ionicons
          name="trash-outline"
          size={15}
          color="#AF6676"
        />

        <Text style={styles.deleteHint}>
          Silmek için karta uzun basınız.
        </Text>

      </View>

    </View>

  );
}


// 5. ANA UYGULAMA EKRANI

function AkilliArizaEkrani() {


  // G1: Kullanıcının yazdığı başlığı tutar

  const [baslik, setBaslik] = useState('');


  // G1: Kullanıcının yazdığı açıklamayı tutar

  const [aciklama, setAciklama] = useState('');


  // G2: Kullanıcının seçtiği kategoriyi tutar

  const [kategori, setKategori] = useState('');


  // G4: Oluşturulan bütün talepleri tutar
  // Başlangıçta liste boştur

  const [talepler, setTalepler] = useState([]);


  // G5: Detayı açık olan talebin numarasını tutar

  const [acikDetay, setAcikDetay] = useState(null);


  // ÖZGÜN ÖZELLİK:
  // Arama kutusuna yazılan metni tutar

  const [arama, setArama] = useState('');


  // Her yeni kayıt için farklı bir sıra numarası tutar

  const talepSayaci = useRef(0);



  // 6. FORM TEMİZLEME FONKSİYONU

  const formuTemizle = () => {

    // Başlık kutusunu boşaltır
    setBaslik('');

    // Açıklama kutusunu boşaltır
    setAciklama('');

    // Kategori seçimini kaldırır
    setKategori('');

  };



  // 7. TALEP KAYDETME FONKSİYONU

  const talepKaydet = () => {


    // G3: Başlık boşsa veya sadece boşluk varsa
    // kayıt oluşturmaz

    if (!baslik.trim()) {

      Alert.alert(
        'Eksik Bilgi',
        'Lütfen arıza başlığını giriniz.'
      );

      return;
    }


    // G3: Açıklama boşsa veya sadece boşluk varsa
    // kayıt oluşturmaz

    if (!aciklama.trim()) {

      Alert.alert(
        'Eksik Bilgi',
        'Lütfen arıza açıklamasını giriniz.'
      );

      return;
    }


    // Kategori seçilmemişse kayıt oluşturmaz

    if (!kategori) {

      Alert.alert(
        'Kategori Eksik',
        'Lütfen bir arıza kategorisi seçiniz.'
      );

      return;
    }


    // Her yeni kayıt için sayacı bir artırır

    talepSayaci.current += 1;


    // G4: Yeni bir talep nesnesi oluşturur

    const yeniTalep = {

      // Tarih ve sıra numarasından benzersiz id oluşturur

      id:
        'TLP-' +
        Date.now() +
        '-' +
        talepSayaci.current,

      baslik: baslik.trim(),

      aciklama: aciklama.trim(),

      kategori: kategori,

      // Her yeni talep Bekliyor durumunda başlar

      durum: 'Bekliyor',

      // Kayıt tarihini ve saatini alır

      tarih: new Date().toLocaleString('tr-TR')

    };


    // Yeni talebi listenin başına ekler
    // Önceki talepleri silmez

    setTalepler((oncekiTalepler) => [

      yeniTalep,

      ...oncekiTalepler

    ]);


    // Yeni kaydın görünmesini engellememesi için
    // arama kutusunu temizler

    setArama('');


    // Kayıt oluştuktan sonra formu temizler

    formuTemizle();


    // G8: Kullanıcıya başarılı işlem mesajı gösterir

    Alert.alert(
      'İşlem Başarılı',
      'Arıza talebiniz başarıyla kaydedildi.'
    );

  };



  // 8. TALEP DETAYINI AÇMA VE KAPATMA

  const detayAc = (id) => {

    setAcikDetay((oncekiDetay) =>

      // Aynı karta tekrar basılırsa detay kapanır
      // Farklı karta basılırsa onun detayı açılır

      oncekiDetay === id ? null : id

    );

  };



  // 9. TALEP SİLME FONKSİYONU

  const talepSil = (id) => {


    // Uzun basılan talebi numarasına göre bulur

    const secilenTalep = talepler.find(
      (item) => item.id === id
    );


    // Talep bulunamazsa işlem yapmaz

    if (!secilenTalep) {
      return;
    }


    // G6: Uzun basınca silme onayı gösterir

    Alert.alert(

      'Talebi Sil',

      '"' + secilenTalep.baslik +
      '" başlıklı talebi silmek istediğinizden emin misiniz?',

      [

        {
          // Vazgeçilirse hiçbir talep silinmez

          text: 'Vazgeç',

          style: 'cancel'

        },

        {

          text: 'Sil',

          style: 'destructive',

          onPress: () => {


            // Sadece seçilen numaraya sahip talebi siler
            // Diğer bütün talepleri korur

            setTalepler((oncekiTalepler) =>

              oncekiTalepler.filter(
                (item) => item.id !== id
              )

            );


            // Silinen talebin detayları açıksa kapatır

            setAcikDetay((oncekiDetay) =>

              oncekiDetay === id
                ? null
                : oncekiDetay

            );


            // G8: Silme işleminin sonucunu gösterir

            Alert.alert(
              'Talep Silindi',
              'Seçilen arıza talebi başarıyla silindi.'
            );

          }

        }

      ],

      {
        cancelable: false
      }

    );

  };



  // 10. TALEP DURUMUNU DEĞİŞTİRME

  const durumDegistir = (id, yeniDurum) => {


    // Değiştirilecek talebi bulur

    const secilenTalep = talepler.find(
      (item) => item.id === id
    );


    // Talep yoksa veya zaten aynı durum seçiliyse
    // değişiklik yapmaz

    if (
      !secilenTalep ||
      secilenTalep.durum === yeniDurum
    ) {
      return;
    }


    // G7: Sadece seçilen talebin durumunu değiştirir

    setTalepler((oncekiTalepler) =>

      oncekiTalepler.map((item) => {


        if (item.id === id) {

          // Talebin diğer bilgilerini korur
          // Sadece durum bilgisini değiştirir

          return {
            ...item,
            durum: yeniDurum
          };

        }


        // Diğer talepleri değiştirmez

        return item;

      })

    );


    // G8: Yeni durum hakkında bilgi verir

    Alert.alert(

      'Durum Güncellendi',

      'Talebin yeni durumu: ' + yeniDurum

    );

  };



  // 11. ÖZGÜN ÖZELLİK: ANLIK ARAMA

  // Arama kutusundaki metni küçük harfe çevirir
  // Başındaki ve sonundaki boşlukları siler

  const arananMetin =
    arama.trim().toLocaleLowerCase('tr-TR');


  // Başlığında aranan kelime geçen talepleri bulur

  const filtreliTalepler = talepler.filter((item) =>

    item.baslik
      .toLocaleLowerCase('tr-TR')
      .includes(arananMetin)

  );



  // 12. LİSTENİN ÜST KISMI

  const listeBasligi = (

    <View>


      {/* Uygulamanın ana başlığı */}

      <View style={styles.header}>

        <View style={styles.headerIcon}>

          <Ionicons
            name="headset-outline"
            size={30}
            color="#0F4E77"
          />

        </View>

        <Text style={styles.headerLabel}>
          ÜNİVERSİTE BİLGİ İŞLEM
        </Text>

        <Text style={styles.title}>
          Akıllı Arıza Talep Yönetimi
        </Text>

        <Text style={styles.subtitle}>
          Arıza taleplerinizi oluşturun ve takip edin.
        </Text>

      </View>



      {/* YENİ TALEP FORMU */}

      <View style={styles.formCard}>

        <View style={styles.sectionHeader}>

          <Ionicons
            name="add-circle-outline"
            size={25}
            color="#AF6676"
          />

          <Text style={styles.sectionTitle}>
            Yeni Talep Oluştur
          </Text>

        </View>


        {/* G1: Arıza başlığı giriş alanı */}

        <Text style={styles.label}>
          Arıza Başlığı *
        </Text>

        <TextInput

          style={styles.input}

          placeholder="Örn: Bilgisayar açılmıyor"

          placeholderTextColor="#526578"

          value={baslik}

          onChangeText={setBaslik}

        />


        {/* G1: Arıza açıklaması giriş alanı */}

        <Text style={styles.label}>
          Arıza Açıklaması *
        </Text>

        <TextInput

          style={[
            styles.input,
            styles.descriptionInput
          ]}

          placeholder="Yaşadığınız sorunu açıklayınız"

          placeholderTextColor="#526578"

          value={aciklama}

          onChangeText={setAciklama}

          multiline={true}

          textAlignVertical="top"

        />


        {/* G2: Arıza kategorisi seçimi */}

        <Text style={styles.label}>
          Arıza Kategorisi *
        </Text>

        <View style={styles.optionsContainer}>

          {kategoriler.map((item) => (

            <Pressable

              key={item}

              onPress={() => setKategori(item)}

              style={[
                styles.optionButton,

                kategori === item &&
                  styles.selectedOption
              ]}

            >

              <Ionicons

                name={kategoriIkonu(item)}

                size={19}

                color="#0F4E77"

              />

              <Text
                style={[
                  styles.optionText,

                  kategori === item &&
                    styles.selectedOptionText
                ]}
              >
                {item}
              </Text>

            </Pressable>

          ))}

        </View>



        {/* G4: Talep kaydetme butonu */}

        <Pressable

          style={styles.saveButton}

          onPress={talepKaydet}

        >

          <Ionicons
            name="checkmark-circle-outline"
            size={23}
            color="#FFFFFF"
          />

          <Text style={styles.saveButtonText}>
            Talebi Kaydet
          </Text>

        </Pressable>



        {/* Form temizleme butonu */}

        <Pressable

          style={styles.clearButton}

          onPress={formuTemizle}

        >

          <Ionicons
            name="refresh-outline"
            size={21}
            color="#0F4E77"
          />

          <Text style={styles.clearButtonText}>
            Formu Temizle
          </Text>

        </Pressable>

      </View>



      {/* TALEP LİSTESİ BAŞLIĞI */}

      <View style={styles.listHeader}>

        <View style={styles.sectionHeader}>

          <Ionicons
            name="documents-outline"
            size={25}
            color="#AF6676"
          />

          <Text style={styles.sectionTitle}>
            Arıza Talepleri
          </Text>

        </View>


        {/* Toplam kayıt sayısı */}

        <View style={styles.countBadge}>

          <Text style={styles.countText}>
            {talepler.length} talep
          </Text>

        </View>

      </View>



      {/* ÖZGÜN ÖZELLİK: ARAMA KUTUSU */}

      <View style={styles.searchContainer}>

        <Ionicons
          name="search-outline"
          size={23}
          color="#0F4E77"
        />

        <TextInput

          style={styles.searchInput}

          placeholder="Arıza başlığı ara..."

          placeholderTextColor="#526578"

          value={arama}

          onChangeText={setArama}

          autoCorrect={false}

        />


        {/* Arama kutusunda yazı varsa temizleme ikonu görünür */}

        {arama.length > 0 && (

          <Pressable

            onPress={() => setArama('')}

            hitSlop={10}

          >

            <Ionicons
              name="close-circle"
              size={23}
              color="#AF6676"
            />

          </Pressable>

        )}

      </View>



      {/* Arama sonucunda bulunan talep sayısı */}

      {arama.trim().length > 0 && (

        <Text style={styles.searchResult}>

          {filtreliTalepler.length} talep bulundu.

        </Text>

      )}



      {/* Kullanıcıya kısa ve uzun basmayı açıklar */}

      <View style={styles.infoBox}>

        <Ionicons
          name="information-circle-outline"
          size={22}
          color="#0F4E77"
        />

        <Text style={styles.infoText}>

          Detayları görmek için karta kısa basınız.
          Silmek için uzun basınız.

        </Text>

      </View>

    </View>

  );



  // 13. EKRANDA GÖSTERİLECEK İÇERİK

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />


      <FlatList


        // Arama sonucuna uygun talepleri gösterir

        data={filtreliTalepler}


        // Her talebi kendi numarasıyla ayırt eder

        keyExtractor={(item) => item.id}


        // Her talep için bir kart oluşturur

        renderItem={({ item }) => (

          <TalepKarti

            talep={item}

            detayAcik={acikDetay === item.id}

            onDetayAc={detayAc}

            onSil={talepSil}

            onDurumDegistir={durumDegistir}

          />

        )}


        // Detay açılıp kapandığında listeyi günceller

        extraData={acikDetay}


        // Formu listenin üstünde gösterir

        ListHeaderComponent={listeBasligi}


        // Liste boşsa açıklayıcı mesaj gösterir

        ListEmptyComponent={

          <View style={styles.emptyContainer}>

            <Ionicons

              name="folder-open-outline"

              size={48}

              color="#AF6676"

            />

            <Text style={styles.emptyTitle}>

              {arama.trim().length > 0
                ? 'Talep bulunamadı'
                : 'Henüz talep oluşturulmadı'}

            </Text>


            <Text style={styles.emptyText}>

              {arama.trim().length > 0
                ? 'Aradığınız başlığa uygun talep yok.'
                : 'Yukarıdaki formu doldurarak yeni bir talep oluşturabilirsiniz.'}

            </Text>

          </View>

        }


        // Uygulamanın en altındaki yazı

        ListFooterComponent={

          <Text style={styles.footer}>

            Üniversite Bilgi İşlem - Teknik Destek

          </Text>

        }


        contentContainerStyle={styles.listContent}

        keyboardShouldPersistTaps="handled"

        showsVerticalScrollIndicator={false}

      />

    </SafeAreaView>

  );

}


// 14. UYGULAMANIN İLK ÇALIŞAN BİLEŞENİ

export default function App() {

  return (

    <SafeAreaProvider>

      <AkilliArizaEkrani />

    </SafeAreaProvider>

  );

}


// 15. UYGULAMANIN TASARIM ÖZELLİKLERİ

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    flexGrow: 1
  },


  // ANA BAŞLIK

  header: {
    backgroundColor: '#FAD272',
    borderRadius: 16,
    padding: 20,
    marginTop: 12,
    marginBottom: 20
  },

  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  },

  headerLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 0.7,
    color: '#0F4E77'
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0F4E77',
    marginTop: 8
  },

  subtitle: {
    fontSize: 14,
    color: '#0F4E77',
    marginTop: 10,
    lineHeight: 21
  },


  // FORM ALANI

  formCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E7BD8B',
    borderRadius: 15,
    padding: 16,
    marginBottom: 25
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
    gap: 8
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#AF6676',
    flexShrink: 1
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F4E77',
    marginTop: 18,
    marginBottom: 8
  },

  input: {
    backgroundColor: '#F7E6EB',
    borderWidth: 1,
    borderColor: '#AF6676',
    borderRadius: 10,
    padding: 13,
    fontSize: 15,
    color: '#0F4E77'
  },

  descriptionInput: {
    minHeight: 110,
    backgroundColor: '#F8E9D7',
    borderColor: '#E7BD8B'
  },


  // KATEGORİ SEÇENEKLERİ

  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 5
  },

  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#E7BD8B',
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#E7BD8B'
  },

  selectedOption: {
    backgroundColor: '#FAD272',
    borderColor: '#0F4E77'
  },

  optionText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#0F4E77'
  },

  selectedOptionText: {
    fontWeight: 'bold'
  },


  // KAYDETME BUTONU

  saveButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#AF6676',
    padding: 16,
    borderRadius: 10,
    marginTop: 23
  },

  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },


  // FORM TEMİZLEME BUTONU

  clearButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FAD272',
    padding: 14,
    borderRadius: 10,
    marginTop: 10
  },

  clearButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F4E77'
  },


  // TALEP LİSTESİ BAŞLIĞI

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 15
  },

  countBadge: {
    backgroundColor: '#E7EDDF',
    borderRadius: 9,
    paddingVertical: 7,
    paddingHorizontal: 12
  },

  countText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0F4E77'
  },


  // ARAMA KUTUSU

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#89A376',
    backgroundColor: '#E7EDDF',
    borderRadius: 10
  },

  searchInput: {
    flex: 1,
    color: '#0F4E77',
    fontSize: 15,
    paddingVertical: 8
  },

  searchResult: {
    color: '#36733A',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 10
  },


  // BİLGİLENDİRME ALANI

  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDF1D1',
    padding: 12,
    gap: 8,
    borderRadius: 9,
    marginTop: 14,
    marginBottom: 15
  },

  infoText: {
    flex: 1,
    fontSize: 12,
    color: '#0F4E77',
    lineHeight: 18
  },


  // TALEP KARTI

  ticketCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E7BD8B',
    borderRadius: 13,
    padding: 16,
    marginBottom: 13
  },

  ticketTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10
  },

  ticketIdArea: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
    gap: 8
  },

  categoryIcon: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#FDF1D1',
    justifyContent: 'center',
    alignItems: 'center'
  },

  ticketId: {
    flexShrink: 1,
    fontSize: 11,
    color: '#526578'
  },

  ticketTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F4E77',
    marginTop: 13
  },

  ticketCategory: {
    fontSize: 14,
    color: '#526578',
    marginTop: 6
  },

  ticketDate: {
    fontSize: 11,
    color: '#526578',
    marginTop: 7
  },


  // TALEP DURUMU

  statusBadge: {
    paddingVertical: 7,
    paddingHorizontal: 11,
    borderRadius: 9
  },

  statusText: {
    fontSize: 12,
    fontWeight: 'bold'
  },


  // DETAY AÇMA VE KAPATMA

  detailToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15
  },

  detailToggleText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F4E77'
  },


  // DETAY KARTI

  detailCard: {
    backgroundColor: '#F8E9D7',
    borderWidth: 1,
    borderColor: '#E7BD8B',
    borderRadius: 11,
    padding: 15,
    marginTop: 15
  },

  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F4E77',
    marginBottom: 6
  },

  detailLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0F4E77',
    marginTop: 13
  },

  detailValue: {
    fontSize: 15,
    color: '#0F4E77',
    marginTop: 5,
    lineHeight: 21
  },


  // DURUM DEĞİŞTİRME BUTONLARI

  statusButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E7BD8B',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 11
  },

  statusButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0F4E77'
  },


  // UZUN BASMA BİLGİSİ

  deleteHintArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 15
  },

  deleteHint: {
    flex: 1,
    color: '#AF6676',
    fontSize: 11
  },


  // BOŞ LİSTE ALANI

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7E6EB',
    borderRadius: 13,
    padding: 30,
    marginTop: 5
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0F4E77',
    marginTop: 12,
    textAlign: 'center'
  },

  emptyText: {
    fontSize: 13,
    color: '#0F4E77',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20
  },

  footer: {
    fontSize: 12,
    color: '#526578',
    textAlign: 'center',
    marginTop: 20
  }

});