import React, {createContext,useContext,useState,useRef} from 'react';
import {tickets} from '../data/tickets';
const TicketContext = createContext(null);
export function TicketProvider({children}) {
 // Bütün ekranlar aynı talep listesini kullanır.
 const [talepler,setTalepler] = useState(tickets);
 const sayac = useRef(104);
 const talepEkle = (bilgiler) => {
  const yeniTalep = {...bilgiler,id:String(sayac.current++),durum:'Bekliyor',tarih:new Date().toLocaleString('tr-TR')};
  setTalepler(onceki=>[yeniTalep,...onceki]);
 };
 const talepSil = id => setTalepler(onceki=>onceki.filter(item=>item.id!==id));
 const durumDegistir = (id,yeniDurum) => setTalepler(onceki=>onceki.map(item=>item.id===id?{...item,durum:yeniDurum}:item));
 return <TicketContext.Provider value={{talepler,talepEkle,talepSil,durumDegistir}}>{children}</TicketContext.Provider>;
}
export function useTickets(){return useContext(TicketContext);}
