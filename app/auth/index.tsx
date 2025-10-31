import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { G, Path } from "react-native-svg";

export default function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Svg
          viewBox="0 0 112 102"
          fill="none"
          height="102"
          width="112"
          style={styles.logo}
        >
          <Path
            d="m56 61.832c5.891 0 10.667-4.776 10.667-10.667s-4.777-10.667-10.667-10.667-10.666 4.776-10.666 10.667 4.774 10.667 10.666 10.667z"
            fill="#61dafb"
          ></Path>
          <G stroke="#61dafb" stroke-width="5.333">
            <Path d="m56 75.165c29.455 0 53.333-10.745 53.333-24s-23.878-24-53.333-24-53.334 10.745-53.334 24 23.879 24 53.334 24z"></Path>
            <Path d="m35.215 63.165c14.728 25.509 35.972 40.815 47.451 34.188 11.48-6.628 8.846-32.68-5.882-58.188-14.727-25.51-35.972-40.816-47.45-34.188-11.48 6.627-8.846 32.679 5.881 58.188z"></Path>
            <Path d="m35.215 39.165c-14.727 25.509-17.36 51.56-5.882 58.188 11.48 6.627 32.724-8.68 47.451-34.188 14.728-25.51 17.362-51.56 5.883-58.188-11.48-6.628-32.724 8.679-47.452 34.188z"></Path>
          </G>
        </Svg>
        {/* TODO: svg 파일로 교체하기*/}
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="이메일 로그인"
          onPress={() => router.push("/auth/login")}
        />
        <Link href="/auth/signup" style={styles.signupText}>
          이메일로 가입하기
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    width: 112,
    height: 112,
  },
  buttonContainer: {
    paddingHorizontal: 32,
    flex: 1,
  },
  signupText: {
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 20,
  },
});
