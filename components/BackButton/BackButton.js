import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function BackButton() {
  const router = useRouter();
  return (
    <Pressable
      style={styles.pressable}
      onPress={() => {
        router.back();
      }}
    >
      <Text style={styles.largeText}>&lt;</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    paddingHorizontal: 16,
  },
  largeText: {
    color: '#fff',
    fontSize: 20,
  },
});
