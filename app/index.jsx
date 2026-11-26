import React from 'react';

import {
  View,
  Text,
  Pressable,
  ScrollView
} from 'react-native';

import { useRouter } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';

import { useTickets } from '../context/TicketContext';

import { colors, styles } from '../theme';

export default function AnaEkran() {

  // Başka ekranlara geçmemizi sağlar
  const router = useRouter();

  // Ortak talep listesini alır
  const { talepler } = useTickets();

  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      <View style={styles.header}>

        <Ionicons
          name="headset-outline"
          size={40}
          color={colors.blue}
        />

        <Text style={styles.smallText}>
          ÜNİVERSİTE BİLGİ İŞLEM
        </Text>

        <Text style={styles.title}>
          Akıllı Arıza Takip Sistemi
        </Text>

        <Text style={styles.subtitle}>
          Arıza taleplerinizi oluşturun,
          görüntüleyin ve takip edin.
        </Text>

      </View>

      <Text style={styles.sectionTitle}>
        Talep Özeti
      </Text>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Toplam Talep: {talepler.length}
        </Text>

        <Text style={styles.text}>
          Bekliyor: {
            talepler.filter(
              (item) => item.durum === 'Bekliyor'
            ).length
          }
        </Text>

        <Text style={styles.text}>
          İşlemde: {
            talepler.filter(
              (item) => item.durum === 'İşlemde'
            ).length
          }
        </Text>

        <Text style={styles.text}>
          Çözüldü: {
            talepler.filter(
              (item) => item.durum === 'Çözüldü'
            ).length
          }
        </Text>

      </View>

      {/* Arıza listesi ekranını açar */}

      <Pressable
        style={styles.button}
        onPress={() => router.push('/ariza-listesi')}
      >

        <Ionicons
          name="list-outline"
          size={25}
          color={colors.white}
        />

        <Text style={styles.buttonText}>
          Arıza Listesi
        </Text>

      </Pressable>

      {/* Yeni arıza formunu açar */}

      <Pressable
        style={styles.yellowButton}
        onPress={() => router.push('/yeni-ariza')}
      >

        <Text style={styles.yellowButtonText}>
          + Yeni Arıza Oluştur
        </Text>

      </Pressable>

      {/* Olmayan arıza numarasını test eder */}

      <Pressable
        style={styles.yellowButton}
        onPress={() => router.push('/ariza/999')}
      >

        <Text style={styles.yellowButtonText}>
          Hatalı ID Testi
        </Text>

      </Pressable>

    </ScrollView>

  );

}