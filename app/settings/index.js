import { StyleSheet, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import SettingSection from "./Section";

export default function Settings({}) {
  const defaultState = "Horizontal Cards";
  const [hourlyType, setHourlyType] = useState(defaultState);
  const [weeklyType, setWeeklyType] = useState(defaultState);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Settings" }} />
      <SettingSection
        title="Hourly Forecast"
        options={[
          { image: "Image Here", name: "Horizontal Cards" },
          { image: "Image Here", name: "Vertical List" },
          { image: "Image Here", name: "None" },
        ]}
        selectedOption={hourlyType}
        setSelectedOption={setHourlyType}
      />
      <SettingSection
        title="Weekly Forecast"
        options={[
          { image: "Image Here", name: "Horizontal Cards" },
          { image: "Image Here", name: "Vertical List" },
          { image: "Image Here", name: "None" },
        ]}
        selectedOption={weeklyType}
        setSelectedOption={setWeeklyType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
  },
});
