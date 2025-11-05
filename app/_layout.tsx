import { queryClient } from "@/api/queryClient";
import useAuth from "@/hooks/queries/useAuth";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <RootNavigator />
        <Toast />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

function RootNavigator() {
  const { auth } = useAuth();
  useEffect(() => {
    auth.id &&
      Toast.show({
        type: "success",
        text1: `${auth.id ?? "회원"}님 환영합니다!`,
      });
  }, [auth.id]);
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
      <Stack.Screen name="post" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
}
