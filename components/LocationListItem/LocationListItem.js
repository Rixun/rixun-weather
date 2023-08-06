import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from '../Icon/Icon';
import { useThemeStore } from '../../store/store';

export default function LocationListItem({
  listItem,
  onPress = () => {},
  onRemove = null,
}) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.locationContainer}
        onPress={() => {
          onPress(listItem);
        }}
      >
        <Text style={styles.largeText}>{listItem.name}</Text>
        <View style={styles.subContainer}>
          <Text style={styles.text}>
            {listItem.admin1 && listItem.admin1 + ', '}
            {listItem.country}
          </Text>
        </View>
      </Pressable>
      {onRemove && (
        <Pressable
          style={styles.closeButton}
          onPress={() => {
            onRemove(listItem);
          }}
        >
          <Icon name="Close" size={16} />
        </Pressable>
      )}
    </View>
  );
}

const textColor = useThemeStore.getState().textColor;
const secondaryTextColor = useThemeStore.getState().secondaryTextColor;
const secondaryBackgroundColor =
  useThemeStore.getState().secondaryBackgroundColor;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: secondaryBackgroundColor,
    marginVertical: 2,
    borderRadius: 8,
  },
  locationContainer: {
    display: 'flex',
    flexGrow: 2,
    flexBasis: 1,
    padding: 16,
    paddingRight: 8,
  },
  closeButton: {
    flexBasis: 1,
    flexGrow: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 4,
  },
  largeText: {
    color: textColor,
    fontSize: 20,
  },
  text: {
    color: secondaryTextColor,
    fontSize: 16,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});
