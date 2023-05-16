import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Overview", headerShown: false }} />
      <Link style={styles.link} href="/Settings">
        Go to Settings
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: "#fff",
  },
});
