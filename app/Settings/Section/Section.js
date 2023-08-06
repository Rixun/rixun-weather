import { StyleSheet, Text, View } from 'react-native';
import Toggle from '../../../components/Toggle/Toggle';
import Icon from '../../../components/Icon/Icon';
import { useThemeStore } from '../../../store/store';

export default function SettingSection(props) {
  const { title, options, selectedOption, setSelectedOption } = props;

  return (
    <View style={styles.container}>
      <Text style={[styles.textColor, styles.title]}>{title}</Text>
      {options.map((option) => (
        <View key={title + option.name} style={styles.optionContainer}>
          <Icon name={option.image} width={80} height={40} />
          <View style={styles.optionToggleContainer}>
            <Text style={[styles.textColor, styles.optionText]}>
              {option.name}
            </Text>
            <Toggle
              active={selectedOption === option.name}
              onToggle={() => {
                setSelectedOption(option.name);
              }}
            />
          </View>
        </View>
      ))}
    </View>
  );
}

const textColor = useThemeStore.getState().textColor;
const secondaryBackgroundColor =
  useThemeStore.getState().secondaryBackgroundColor;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: secondaryBackgroundColor,
  },
  title: {
    fontSize: 18,
    paddingBottom: 4,
  },
  textColor: {
    color: textColor,
  },
  optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    alignItems: 'center',
  },
  optionToggleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    paddingHorizontal: 8,
  },
});
