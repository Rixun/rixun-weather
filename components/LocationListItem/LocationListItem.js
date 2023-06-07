import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function LocationListItem({ listItem, onPress = () => {} }) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        onPress(listItem);
      }}
    >
      <Text style={styles.largeText}>{listItem.name}</Text>
      <View style={styles.subContainer}>
        {listItem.admin1 && (
          <Text style={styles.text}>{listItem.admin1}, </Text>
        )}
        <Text style={styles.text}>{listItem.country}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#333',
    marginVertical: 1,
    borderRadius: 8,
    padding: 16,
  },
  largeText: {
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#ddd',
    fontSize: 16,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
