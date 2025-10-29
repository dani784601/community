import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Pressable onPress={() => router.push("/explore")}>
        <Text>Home Screen</Text>
      </Pressable>
    </SafeAreaView>
  );
}
