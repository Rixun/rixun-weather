import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Settings({}) {
  const router = useRouter();
  return (
    <View>
      <Text
        onPress={() => {
          router.back();
        }}
      >
        Back
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
