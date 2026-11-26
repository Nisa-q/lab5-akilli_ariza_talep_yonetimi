import React from 'react';
import {View,Text,Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import StatusBadge from './StatusBadge';
import {colors,styles} from '../theme';
export default function TicketCard({ticket,onPress,onLongPress}) {
 return <Pressable style={styles.card} onPress={onPress} onLongPress={onLongPress} delayLongPress={500}>
  <View style={styles.between}><View style={styles.iconBox}><Ionicons name="construct-outline" size={25} color={colors.blue}/></View><StatusBadge durum={ticket.durum}/></View>
  <Text style={styles.smallText}>Arıza No: {ticket.id}</Text><Text style={styles.cardTitle}>{ticket.baslik}</Text>
  <View style={styles.row}><Ionicons name="location-outline" size={19} color={colors.blue}/><Text style={styles.text}>{ticket.konum}</Text></View>
  <Text style={styles.smallText}>Kategori: {ticket.kategori}</Text>{ticket.tarih && <Text style={styles.smallText}>{ticket.tarih}</Text>}
  <View style={styles.between}><Text style={styles.text}>Detayları Gör</Text><Ionicons name="chevron-forward" size={22} color={colors.blue}/></View>
  <Text style={{color:colors.pink,fontSize:12}}>Silmek için karta uzun basınız.</Text>
 </Pressable>;
}
