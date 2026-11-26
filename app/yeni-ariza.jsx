import React,{useState} from 'react';
import {View,Text,TextInput,Pressable,ScrollView,Alert} from 'react-native';
import {useRouter} from 'expo-router';
import {kategoriler} from '../data/tickets';
import {useTickets} from '../context/TicketContext';
import {colors,styles} from '../theme';
export default function YeniAriza(){
 const router=useRouter(); const {talepEkle}=useTickets();
 const [baslik,setBaslik]=useState(''); const [aciklama,setAciklama]=useState(''); const [konum,setKonum]=useState(''); const [kategori,setKategori]=useState('');
 const formuTemizle=()=>{setBaslik('');setAciklama('');setKonum('');setKategori('');};
 const kaydet=()=>{if(!baslik.trim()||!aciklama.trim()||!konum.trim()||!kategori){Alert.alert('Eksik Bilgi','Lütfen bütün alanları doldurunuz.');return;}talepEkle({baslik:baslik.trim(),aciklama:aciklama.trim(),konum:konum.trim(),kategori});formuTemizle();Alert.alert('İşlem Başarılı','Yeni arıza talebiniz kaydedildi.',[{text:'Listeye Git',onPress:()=>router.replace('/ariza-listesi')}]);};
 return <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled"><View style={styles.header}><Text style={styles.title}>Yeni Arıza Oluştur</Text><Text style={styles.subtitle}>Yaşadığınız teknik sorunu bildiriniz.</Text></View><View style={styles.card}>
 <Text style={styles.label}>Arıza Başlığı *</Text><TextInput style={styles.input} placeholder="Arıza başlığını giriniz" placeholderTextColor={colors.gray} value={baslik} onChangeText={setBaslik}/>
 <Text style={styles.label}>Arıza Açıklaması *</Text><TextInput style={[styles.input,styles.description]} placeholder="Sorunu açıklayınız" placeholderTextColor={colors.gray} value={aciklama} onChangeText={setAciklama} multiline/>
 <Text style={styles.label}>Arıza Konumu *</Text><TextInput style={styles.input} placeholder="Örn: Kütüphane" placeholderTextColor={colors.gray} value={konum} onChangeText={setKonum}/>
 <Text style={styles.label}>Arıza Kategorisi *</Text><View style={styles.options}>{kategoriler.map(item=><Pressable key={item} onPress={()=>setKategori(item)} style={[styles.option,kategori===item&&styles.selectedOption]}><Text style={styles.optionText}>{item}</Text></Pressable>)}</View>
 <Pressable style={styles.button} onPress={kaydet}><Text style={styles.buttonText}>Talebi Kaydet</Text></Pressable><Pressable style={styles.yellowButton} onPress={formuTemizle}><Text style={styles.yellowButtonText}>Formu Temizle</Text></Pressable></View></ScrollView>;
}
