import React from 'react';

import { Stack } from 'expo-router';

import { TicketProvider } from '../context/TicketContext';

import { colors } from '../theme';

export default function RootLayout() {

  return (

    <TicketProvider>

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.yellow
          },
          headerTintColor: colors.blue,
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          contentStyle: {
            backgroundColor: colors.white
          }
        }}
      >

        <Stack.Screen
          name="index"
          options={{ title: 'Arıza Takip' }}
        />

        <Stack.Screen
          name="ariza-listesi"
          options={{ title: 'Arıza Listesi' }}
        />

        <Stack.Screen
          name="yeni-ariza"
          options={{ title: 'Yeni Arıza' }}
        />

        <Stack.Screen
          name="ariza/[id]"
          options={{ title: 'Arıza Detayı' }}
        />

      </Stack>

    </TicketProvider>

  );

}