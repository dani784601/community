import { COLORS } from "@/constants";
import { Stack } from "expo-router";

export default function SettingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: COLORS.WHITE },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "설정", headerShown: false }}
      />
    </Stack>
  );
}
