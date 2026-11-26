import React from 'react';
import {View,Text} from 'react-native';
export default function StatusBadge({durum}) {
 const renkler = {Bekliyor:['#C56A12','#FFF0D5'],İşlemde:['#0F4E77','#E1EDF5'],Çözüldü:['#36733A','#E7EDDF']};
 const [yazi,arkaPlan] = renkler[durum] || ['#555555','#EEEEEE'];
 return <View style={{backgroundColor:arkaPlan,paddingVertical:8,paddingHorizontal:12,borderRadius:9,alignSelf:'flex-start'}}><Text style={{color:yazi,fontWeight:'bold',fontSize:13}}>{durum}</Text></View>;
}
