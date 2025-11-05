import { COLORS } from "@/constants";
import { Feather } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";

export default function Layout() {
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
        name="write"
        options={{
          title: "글쓰기",
          headerShown: true,
          headerLeft: () => (
            <Link href="/" replace>
              <Feather name="arrow-left" size={28} color="black" />
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
