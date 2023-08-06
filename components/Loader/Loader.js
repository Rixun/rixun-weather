import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Icon from '../Icon/Icon';

export default function Loader({ type = 'sun' }) {
  const rotate = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: withRepeat(
          withSequence(
            withTiming(0 + 'deg', { duration: 0, easing: Easing.linear }),
            withTiming(360 + 'deg', { duration: 3000, easing: Easing.linear })
          ),
          -1,
          false
        ),
      },
    ],
  }));

  return (
    <View style={styles.container}>
      {type === 'border' && <Animated.View style={[styles.loader, rotate]} />}
      {type === 'sun' && (
        <Animated.View style={[rotate]}>
          <Icon name="Sun" size={100} />
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  loader: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    borderLeftColor: '#0BAEFF',
    borderRightColor: '#ffffff',
    borderRightWidth: 5,
    borderLeftWidth: 5,
  },
});
