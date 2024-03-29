import { StyleSheet, View } from 'react-native';
import SettingSection from './Section/Section';
import { useSettingStore } from '../../store/store';
import { HORIZONTAL_CARDS, NONE, VERTICAL_LIST } from '../../config/constants';
import { Drawer } from 'expo-router/drawer';

export default function Settings({}) {
  const hourlyViewType = useSettingStore((state) => state.hourlyViewType);
  const setHourlyViewType = useSettingStore((state) => state.setHourlyViewType);
  const dailyViewType = useSettingStore((state) => state.dailyViewType);
  const setDailyViewType = useSettingStore((state) => state.setDailyViewType);
  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          title: 'Settings',
        }}
      />
      <SettingSection
        title="Hourly Forecast"
        options={[
          { image: 'HorizontalCards', name: HORIZONTAL_CARDS },
          { image: 'VerticalList', name: VERTICAL_LIST },
          { image: 'EmptyContainer', name: NONE },
        ]}
        selectedOption={hourlyViewType}
        setSelectedOption={setHourlyViewType}
      />
      <SettingSection
        title="Daily Forecast"
        options={[
          { image: 'HorizontalCards', name: HORIZONTAL_CARDS },
          { image: 'VerticalList', name: VERTICAL_LIST },
          { image: 'EmptyContainer', name: NONE },
        ]}
        selectedOption={dailyViewType}
        setSelectedOption={setDailyViewType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
});
