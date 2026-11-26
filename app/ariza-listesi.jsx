import React,{useState} from 'react';
import {View,Text,TextInput,FlatList,Pressable,Alert} from 'react-native';
import {useRouter} from 'expo-router';
import TicketCard from '../components/TicketCard';
import {useTickets} from '../context/TicketContext';
import {colors,styles} from '../theme';
export default function ArizaListesi(){
 const router=useRouter(); const {talepler,talepSil}=useTickets(); const [arama,setArama]=useState('');
 const filtreliTalepler=talepler.filter(item=>item.baslik.toLocaleLowerCase('tr-TR').includes(arama.trim().toLocaleLowerCase('tr-TR')));
 const silmeOnayi=ticket=>Alert.alert('Talebi Sil',ticket.baslik+' başlıklı talep silinsin mi?',[{text:'Vazgeç',style:'cancel'},{text:'Sil',style:'destructive',onPress:()=>{talepSil(ticket.id);Alert.alert('Talep Silindi','Seçilen talep başarıyla silindi.');}}]);
 return <View style={styles.container}><FlatList data={filtreliTalepler} keyExtractor={item=>item.id} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled"
 ListHeaderComponent={<View><View style={styles.header}><Text style={styles.title}>Arıza Listesi</Text><Text style={styles.subtitle}>Toplam {talepler.length} talep</Text></View><TextInput style={styles.input} placeholder="Arıza başlığı ara..." placeholderTextColor={colors.gray} value={arama} onChangeText={setArama}/>{arama.length>0&&<Pressable onPress={()=>setArama('')}><Text style={styles.text}>Aramayı temizle</Text></Pressable>}{arama.trim().length>0&&<Text style={styles.text}>{filtreliTalepler.length} talep bulundu.</Text>}<Pressable style={styles.yellowButton} onPress={()=>router.push('/yeni-ariza')}><Text style={styles.yellowButtonText}>+ Yeni Arıza</Text></Pressable><Text style={[styles.sectionTitle,{marginTop:20}]}>Arıza Talepleri</Text></View>}
 renderItem={({item})=><TicketCard ticket={item} onPress={()=>router.push(`/ariza/${item.id}`)} onLongPress={()=>silmeOnayi(item)}/>}
 ListEmptyComponent={<View style={styles.empty}><Text style={styles.cardTitle}>Talep bulunamadı.</Text></View>}/></View>;
}
