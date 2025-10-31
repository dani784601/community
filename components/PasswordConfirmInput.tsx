import InputField from "@/components/InputField";
import { Controller, useFormContext, useWatch } from "react-hook-form";

export default function PasswordConfirmInput() {
  const { control } = useFormContext();
  const password = useWatch({ control, name: "password" });
  return (
    <Controller
      name="passwordConfirm"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length === 0) {
            return "비밀번호 확인을 입력해주세요.";
          }
          if (data !== password) {
            return "비밀번호가 일치하지 않습니다.";
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputField
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요"
          submitBehavior="submit"
          onChangeText={onChange}
          ref={ref}
          textContentType="oneTimeCode"
          value={value}
          secureTextEntry
          error={error?.message}
        />
      )}
    />
  );
}
