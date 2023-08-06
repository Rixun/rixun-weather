import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import Icon from '../Icon/Icon';
import { useThemeStore } from '../../store/store';

export default function IconLink(props) {
  const { href, iconName, iconSize, text } = props;
  return (
    <View>
      <Link style={styles.text} href={href}>
        <View>
          <Icon name={iconName} size={iconSize} />
          {text && <Text style={styles.text}>{text}</Text>}
        </View>
      </Link>
    </View>
  );
}

const textColor = useThemeStore.getState().textColor;

const styles = StyleSheet.create({
  text: {
    color: textColor,
  },
});
