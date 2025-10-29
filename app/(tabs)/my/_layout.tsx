import { COLORS } from "@/constants";
import { Stack } from "expo-router";

export default function MyLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: COLORS.WHITE },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "내정보", headerShown: false }}
      />
    </Stack>
  );
}
