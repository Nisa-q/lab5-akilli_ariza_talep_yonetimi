import React from 'react';
import {View,Text,Pressable,ScrollView,Alert} from 'react-native';
import {useRouter,useLocalSearchParams} from 'expo-router';
import StatusBadge from '../../components/StatusBadge';
import {useTickets} from '../../context/TicketContext';
import {durumlar} from '../../data/tickets';
import {styles} from '../../theme';
export default function ArizaDetayi(){
 const router=useRouter(); const {id}=useLocalSearchParams(); const {talepler,durumDegistir}=useTickets();
 // Rotadan gelen numara ile doğru kaydı bulur.
 const ariza=talepler.find(item=>item.id===id);
 const geriDon=()=>router.canGoBack()?router.back():router.replace('/ariza-listesi');
 if(!ariza)return <View style={[styles.container,styles.content]}><View style={styles.empty}><Text style={styles.title}>Arıza Bulunamadı</Text><Text style={styles.text}>{id} numaralı arıza kaydı bulunmamaktadır.</Text></View><Pressable style={styles.button} onPress={geriDon}><Text style={styles.buttonText}>Geri Dön</Text></Pressable></View>;
 return <ScrollView style={styles.container} contentContainerStyle={styles.content}><View style={styles.header}><Text style={styles.smallText}>ARIZA NO: {ariza.id}</Text><Text style={styles.title}>{ariza.baslik}</Text><StatusBadge durum={ariza.durum}/></View>
 <View style={styles.detailBox}><Text style={styles.sectionTitle}>Arıza Bilgileri</Text>{[['Başlık',ariza.baslik],['Açıklama',ariza.aciklama],['Konum',ariza.konum],['Kategori',ariza.kategori],...(ariza.tarih?[['Tarih',ariza.tarih]]:[])].map(([etiket,deger])=><View key={etiket}><Text style={styles.label}>{etiket}</Text><Text style={styles.text}>{deger}</Text></View>)}<Text style={styles.label}>Mevcut Durum</Text><StatusBadge durum={ariza.durum}/><Text style={styles.label}>Durumu Değiştir</Text><View style={styles.options}>{durumlar.map(item=><Pressable key={item} style={[styles.option,ariza.durum===item&&styles.selectedOption]} onPress={()=>{if(ariza.durum!==item){durumDegistir(ariza.id,item);Alert.alert('Durum Güncellendi','Yeni durum: '+item);}}}><Text style={styles.optionText}>{item}</Text></Pressable>)}</View></View><Pressable style={styles.button} onPress={geriDon}><Text style={styles.buttonText}>Geri Dön</Text></Pressable></ScrollView>;
}
