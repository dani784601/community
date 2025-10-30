import { COLORS } from "@/constants";
import { Foundation } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: COLORS.BLACK,
        contentStyle: {
          backgroundColor: COLORS.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "로그인",
          headerShown: true,
          headerLeft: () => (
            <Link href="/" replace style={{ paddingRight: 8 }}>
              <Foundation name="home" size={28} color="black" />
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
