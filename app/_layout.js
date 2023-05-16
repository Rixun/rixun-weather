import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#111111",
        },
        headerTintColor: "#fff",
      }}
    />
  );
}
