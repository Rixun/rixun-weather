import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Page1 from './src/pages/Page1';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Rixun Weather App</Text>
      <StatusBar style="auto" />
      <View style={styles.cardSection}>
        <Page1 />
        <Page1 />
        <Page1 />
        <Page1 />
        <Page1 />
        <Page1 />
        <Page1 />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10
  }
});
