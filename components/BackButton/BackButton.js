import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Icon from '../Icon/Icon';

export default function BackButton() {
  const router = useRouter();
  return (
    <Pressable
      style={styles.pressable}
      onPress={() => {
        router.back();
      }}
    >
      <Icon name="Back" size={28} />
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
