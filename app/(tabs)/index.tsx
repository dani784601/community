import { router } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <CustomButton
        label="Button"
        onPress={() => {
          router.push("/auth");
        }}
      />
    </SafeAreaView>
  );
}
