import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';

export default function Locations() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Locations',
          headerStyle: {
            backgroundColor: '#161616',
          },
          headerTintColor: '#fff',
        }}
      />
      <Text>Locations</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
});
