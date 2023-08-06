import { Switch } from 'react-native';
import React from 'react';
import { useThemeStore } from '../../store/store';

export default function Toggle(props) {
  const { active, onToggle } = props;
  const { primaryColor, defaultSecondaryBackground } = useThemeStore(
    (state) => ({
      primaryColor: state.primaryColor,
      defaultSecondaryBackground: state.defaultSecondaryBackground,
    })
  );
  return (
    <Switch
      trackColor={{ false: '#ddd', true: '#ddd' }}
      thumbColor={active ? primaryColor : '#ccc'}
      activeThumbColor={primaryColor}
      ios_backgroundColor="#ddd"
      onValueChange={onToggle}
      value={active}
    />
  );
}
