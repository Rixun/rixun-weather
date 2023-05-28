import { Switch } from 'react-native';
import React from 'react';

export default function Toggle(props) {
  const { active, onToggle } = props;
  return (
    <Switch
      trackColor={{ false: '#ddd', true: '#ddd' }}
      thumbColor={active ? '#0098e5' : '#bbb'}
      ios_backgroundColor="#ddd"
      onValueChange={onToggle}
      value={active}
    />
  );
}
