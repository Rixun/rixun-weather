import { StyleSheet, View } from 'react-native';
import SettingSection from './Section/Section';
import { useSettingStore } from '../../store/store';
import { HORIZONTAL_CARDS, NONE, VERTICAL_LIST } from '../../config/constants';
import { Drawer } from '../../utility/Drawer';

export default function Settings({}) {
  const hourlyViewType = useSettingStore((state) => state.hourlyViewType);
  const setHourlyViewType = useSettingStore((state) => state.setHourlyViewType);
  const weeklyViewType = useSettingStore((state) => state.weeklyViewType);
  const setWeeklyViewType = useSettingStore((state) => state.setWeeklyViewType);
  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
        }}
      />
      <SettingSection
        title="Hourly Forecast"
        options={[
          { image: 'Image Here', name: HORIZONTAL_CARDS },
          { image: 'Image Here', name: VERTICAL_LIST },
          { image: 'Image Here', name: NONE },
        ]}
        selectedOption={hourlyViewType}
        setSelectedOption={setHourlyViewType}
      />
      <SettingSection
        title="Weekly Forecast"
        options={[
          { image: 'Image Here', name: HORIZONTAL_CARDS },
          { image: 'Image Here', name: VERTICAL_LIST },
          { image: 'Image Here', name: NONE },
        ]}
        selectedOption={weeklyViewType}
        setSelectedOption={setWeeklyViewType}
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
