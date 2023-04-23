import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Link href="/settings">Go to Settings</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
