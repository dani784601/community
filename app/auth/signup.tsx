import FixedBottomCTA from "@/components/FixedBottomCTA";
import InputField from "@/components/InputField";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function SignupScreen() {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSubmit = () => {
    if (signupData.email.length === 0) {
      setError({ ...error, email: "이메일을 입력해주세요" });
    }
    console.log(signupData);
  };

  const handleChangeText = (name: string, text: string) => {
    setSignupData({ ...signupData, [name]: text });
  };

  return (
    <>
      <View style={styles.container}>
        <InputField
          value={signupData.email}
          onChangeText={(text) => handleChangeText("email", text)}
          label="이메일"
          placeholder="이메일을 입력해주세요"
          error={error.email}
        />
        <InputField
          value={signupData.password}
          onChangeText={(text) => handleChangeText("password", text)}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
        />
        <InputField
          value={signupData.passwordConfirm}
          onChangeText={(text) => handleChangeText("passwordConfirm", text)}
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요"
        />
      </View>
      <FixedBottomCTA label="회원가입하기" onPress={handleSubmit} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
