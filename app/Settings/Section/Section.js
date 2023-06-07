import { StyleSheet, Text, View } from 'react-native';
import Toggle from '../../../components/Toggle/Toggle';

export default function SettingSection(props) {
  const { title, options, selectedOption, setSelectedOption } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {options.map((option) => (
        <View key={title + option.name} style={styles.optionContainer}>
          <Text style={styles.text}>{option.image}</Text>
          <View style={styles.optionToggleContainer}>
            <Text style={styles.optionText}>{option.name}</Text>
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

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderBottomColor: '#292929',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    paddingBottom: 16,
  },
  text: {
    color: '#fff',
  },
  optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  optionToggleContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  optionText: {
    color: '#fff',
    paddingHorizontal: 16,
  },
});
